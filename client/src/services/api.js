const API_URL = 'http://localhost:5000/api/assignments';

async function readResponse(response) {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'The assignment request failed.');
  }

  return data;
}

export async function getAssignments() {
  return readResponse(await fetch(API_URL));
}

export async function submitAssignment(id) {
  const response = await fetch(`${API_URL}/${id}/submit`, { method: 'PUT' });
  return readResponse(response);
}