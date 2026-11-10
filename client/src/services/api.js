const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/+$/, '');

async function readResponse(response) {
  const contentType = response.headers.get('content-type') || '';
  const data = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message = typeof data === 'string'
      ? data
      : data?.error?.message || data?.message;
    throw new Error(message || `Request failed with status ${response.status}.`);
  }

  return data;
}

export async function getAssignments({ signal } = {}) {
  const response = await fetch(`${API_BASE_URL}/assignments`, { signal });
  return readResponse(response);
}

export async function submitAssignment(id, { signal } = {}) {
  const response = await fetch(`${API_BASE_URL}/assignments/${encodeURIComponent(id)}/submit`, {
    method: 'PUT',
    signal
  });
  return readResponse(response);
}
