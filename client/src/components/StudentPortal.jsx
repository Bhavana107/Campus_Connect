import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAssignments, submitAssignment as submitAssignmentRequest } from '../services/api.js';

const tabs = [
  { id: 'notices', label: 'Notices & Events' },
  { id: 'assignments', label: 'Assignments' },
  { id: 'attendance', label: 'Track Attendance' },
  { id: 'profile', label: 'Profile' }
];

const notices = [
  { id: 1, title: 'Mid-Term Exam Schedule Released', date: 'Sept 10, 2026', department: 'SOCSE' },
  { id: 2, title: 'Hackathon Registration Open', date: 'Sept 20, 2026', department: 'RVU Tech Club' }
];

export default function StudentPortal({ onBackToHome }) {
  const [assignments, setAssignments] = useState([]);
  const [activeTab, setActiveTab] = useState('notices');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [submittingId, setSubmittingId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isStudentRoute = location.pathname.startsWith('/student');
  const routeTab = isStudentRoute ? location.pathname.split('/')[2] : null;
  const selectedTab = tabs.some((tab) => tab.id === routeTab) ? routeTab : activeTab;

  useEffect(() => {
    let isMounted = true;

    getAssignments()
      .then((data) => {
        if (isMounted) setAssignments(data);
      })
      .catch((requestError) => {
        if (isMounted) setError(requestError.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  function selectTab(tabId) {
    setActiveTab(tabId);
    if (isStudentRoute) navigate(`/student/${tabId}`);
  }

  async function handleAssignmentSubmit(id) {
    setError('');
    setSubmittingId(id);

    try {
      const updatedAssignment = await submitAssignmentRequest(id);
      setAssignments((currentAssignments) => currentAssignments.map((assignment) => (
        assignment.id === id ? updatedAssignment : assignment
      )));
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSubmittingId(null);
    }
  }

  return (
    <section className="portal-container" id="student-portal">
      <header className="portal-header">
        <div>
          <h2>Student Portal View</h2>
          <p>Welcome, RVU Student</p>
        </div>
        {isStudentRoute && onBackToHome && (
          <button className="portal-back-button" onClick={onBackToHome}>
            Back to Main Campus View
          </button>
        )}
      </header>

      <nav className="portal-tabs" aria-label="Student portal sections">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`portal-tab${selectedTab === tab.id ? ' active' : ''}`}
            onClick={() => selectTab(tab.id)}
            aria-current={selectedTab === tab.id ? 'page' : undefined}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="portal-content">
        {selectedTab === 'notices' && (
          <section>
            <h3>Campus Notices &amp; Events</h3>
            <ul className="portal-list">
              {notices.map((notice) => (
                <li key={notice.id}>
                  <div>
                    <strong>{notice.title}</strong>
                    <p>{notice.department} &bull; {notice.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {selectedTab === 'assignments' && (
          <section>
            <h3>Assignments &amp; Submissions</h3>
            {error && <p className="assignment-error" role="alert">{error}</p>}
            {loading ? (
              <p>Loading assignments...</p>
            ) : (
              <ul className="portal-list">
                {assignments.map((assignment) => (
                  <li key={assignment.id}>
                    <div>
                      <strong>{assignment.title}</strong>
                      <p>{assignment.subject} &bull; Due: {assignment.dueDate}</p>
                    </div>
                    {assignment.status === 'Submitted' ? (
                      <span>Submitted</span>
                    ) : (
                      <button
                        className="portal-action-button"
                        onClick={() => handleAssignmentSubmit(assignment.id)}
                        disabled={submittingId === assignment.id}
                      >
                        {submittingId === assignment.id ? 'Submitting...' : 'Submit Assignment'}
                      </button>
                    )}
                  </li>
                ))}
                {assignments.length === 0 && <li>No assignments available.</li>}
              </ul>
            )}
          </section>
        )}

        {selectedTab === 'attendance' && (
          <section>
            <h3>Attendance Tracker</h3>
            <ul className="portal-list">
              <li><strong>CS3301 - Full Stack</strong><span>88% Attendance</span></li>
              <li><strong>CS3302 - DBMS</strong><span>92% Attendance</span></li>
            </ul>
          </section>
        )}

        {selectedTab === 'profile' && (
          <section className="portal-profile">
            <h3>Student Profile</h3>
            <p><strong>Name:</strong> RVU Student</p>
            <p><strong>Program:</strong> Computer Science</p>
            <p><strong>Role:</strong> Student</p>
          </section>
        )}
      </div>
    </section>
  );
}
