
import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

export default function StudentPortal({ onBackToHome }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Sample assignment data stored locally in React
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      subject: 'CS3301 - Full Stack',
      title: 'Lab Assignment 2: React Routing',
      status: 'Pending',
      dueDate: 'Sept 15, 2026',
    },
    {
      id: 2,
      subject: 'CS3302 - DBMS',
      title: 'ER Diagram Project Report',
      status: 'Submitted',
      dueDate: 'Sept 01, 2026',
    },
  ]);

  // Sample campus notices
  const notices = [
    {
      id: 1,
      title: 'Mid-Term Exam Schedule Released',
      date: 'Sept 10, 2026',
      dept: 'SOCSE',
    },
    {
      id: 2,
      title: 'Hackathon Registration Open',
      date: 'Sept 20, 2026',
      dept: 'RVU Tech Club',
    },
  ];

  // Update assignment status locally
  const handleAssignmentSubmit = (id) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((item) =>
        item.id === id
          ? { ...item, status: 'Submitted' }
          : item
      )
    );
  };

  // Check which tab is currently active
  const isActive = (path) => {
    if (path === '/student/notices') {
      return (
        location.pathname === '/student' ||
        location.pathname === '/student/' ||
        location.pathname === '/student/notices'
      );
    }

    return location.pathname === path;
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div>
          <h2 style={{ margin: 0, color: '#F2A900' }}>
            👨‍🎓 Student Portal View
          </h2>
          <span style={{ fontSize: '13px', color: '#e0e0e0' }}>
            Welcome, RVU Student
          </span>
        </div>

        <button onClick={onBackToHome} style={styles.backBtn}>
          ← Back to Main Campus View
        </button>
      </header>

      {/* Navigation tabs */}
      <div style={styles.tabContainer}>
        <button
          onClick={() => navigate('/student/notices')}
          style={
            isActive('/student/notices')
              ? styles.activeTab
              : styles.tab
          }
        >
          Notices & Events
        </button>

        <button
          onClick={() => navigate('/student/assignments')}
          style={
            isActive('/student/assignments')
              ? styles.activeTab
              : styles.tab
          }
        >
          Assignments
        </button>

        <button
          onClick={() => navigate('/student/attendance')}
          style={
            isActive('/student/attendance')
              ? styles.activeTab
              : styles.tab
          }
        >
          Track Attendance
        </button>

        <button
          onClick={() => navigate('/student/profile')}
          style={
            isActive('/student/profile')
              ? styles.activeTab
              : styles.tab
          }
        >
          Profile
        </button>
      </div>

      {/* Route-based content */}
      <div style={styles.contentCard}>
        <Routes>
          <Route
            index
            element={<NoticesView notices={notices} />}
          />

          <Route
            path="notices"
            element={<NoticesView notices={notices} />}
          />

          <Route
            path="assignments"
            element={
              <AssignmentsView
                assignments={assignments}
                onSubmit={handleAssignmentSubmit}
              />
            }
          />

          <Route
            path="attendance"
            element={<AttendanceView />}
          />

          <Route
            path="profile"
            element={<ProfileView />}
          />

          <Route
            path="*"
            element={<NotFoundView navigate={navigate} />}
          />
        </Routes>
      </div>
    </div>
  );
}

// Notices and Events
function NoticesView({ notices }) {
  return (
    <div>
      <h3>📢 Campus Notices & Events</h3>

      <ul style={styles.list}>
        {notices.map((item) => (
          <li key={item.id} style={styles.listItem}>
            <div>
              <strong>{item.title}</strong>
              <p style={styles.subText}>
                {item.dept} • {item.date}
              </p>
            </div>

            <button
              type="button"
              style={styles.actionBtn}
              onClick={() =>
                window.alert(
                  `${item.title}\nDepartment: ${item.dept}\nDate: ${item.date}`
                )
              }
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Assignments
function AssignmentsView({ assignments, onSubmit }) {
  return (
    <div>
      <h3>📝 Assignments & Submissions</h3>

      {assignments.length === 0 ? (
        <p>No assignments available.</p>
      ) : (
        <ul style={styles.list}>
          {assignments.map((item) => (
            <li key={item.id} style={styles.listItem}>
              <div>
                <strong>{item.title}</strong>
                <p style={styles.subText}>
                  {item.subject} • Due: {item.dueDate}
                </p>
              </div>

              {item.status === 'Submitted' ? (
                <span style={styles.badgeSuccess}>
                  Submitted
                </span>
              ) : (
                <button
                  type="button"
                  style={styles.actionBtn}
                  onClick={() => onSubmit(item.id)}
                >
                  Submit Assignment
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Attendance Tracker
function AttendanceView() {
  return (
    <div>
      <h3>📊 Attendance Tracker</h3>

      <div style={styles.grid}>
        <div style={styles.metricCard}>
          <h4>CS3301 - Full Stack</h4>
          <p style={styles.metricText}>88% Attendance</p>
        </div>

        <div style={styles.metricCard}>
          <h4>CS3302 - DBMS</h4>
          <p style={styles.metricText}>92% Attendance</p>
        </div>
      </div>
    </div>
  );
}

// Student Profile
function ProfileView() {
  return (
    <div>
      <h3>👤 Student Profile</h3>

      <div style={{ textAlign: 'left', lineHeight: '1.8' }}>
        <p>
          <strong>Name:</strong> RVU Student
        </p>

        <p>
          <strong>Department:</strong> School of Computer Science
          & Engineering (SOCSE)
        </p>

        <p>
          <strong>Course:</strong> CS3301 - Full Stack Development
        </p>

        <p>
          <strong>Status:</strong> Active Enrolled
        </p>
      </div>
    </div>
  );
}

// Invalid route fallback
function NotFoundView({ navigate }) {
  return (
    <div>
      <h3>Page Not Found</h3>
      <p>The requested student portal page does not exist.</p>

      <button
        type="button"
        style={styles.actionBtn}
        onClick={() => navigate('/student/notices')}
      >
        Back to Notices
      </button>
    </div>
  );
}

// RVU University Styling
const styles = {
  container: {
    maxWidth: '850px',
    margin: '30px auto',
    fontFamily: 'Arial, sans-serif',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: '#0A2240',
    padding: '15px 20px',
    borderRadius: '8px 8px 0 0',
    color: '#fff',
  },

  backBtn: {
    backgroundColor: '#F2A900',
    border: 'none',
    padding: '8px 14px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#0A2240',
  },

  tabContainer: {
    display: 'flex',
    backgroundColor: '#e0e0e0',
    borderBottom: '2px solid #0A2240',
  },

  tab: {
    flex: 1,
    padding: '12px 8px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#333',
  },

  activeTab: {
    flex: 1,
    padding: '12px 8px',
    border: 'none',
    backgroundColor: '#ffffff',
    color: '#0A2240',
    fontWeight: 'bold',
    borderTop: '3px solid #0A2240',
    cursor: 'pointer',
  },

  contentCard: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '0 0 8px 8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    minHeight: '220px',
  },

  list: {
    listStyle: 'none',
    padding: 0,
  },

  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    borderBottom: '1px solid #eee',
  },

  subText: {
    margin: '4px 0 0 0',
    fontSize: '12px',
    color: '#666',
  },

  actionBtn: {
    backgroundColor: '#0A2240',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },

  badgeSuccess: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
  },

  metricCard: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '6px',
    textAlign: 'center',
  },

  metricText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#0A2240',
  },
};