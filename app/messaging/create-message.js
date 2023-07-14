const createMessage = (body, sessionId) => {
  return {
    body,
    sessionId,
    type: 'type',
    source: 'source'
  }
}

module.exports = {
  createMessage
}
