const { sendMessage } = require('./send-message')

const processMessage = async (message, receiver) => {
  try {
    console.log(`message details: ${message}`)
    await sendMessage(message.body, message.sessionId)
    await receiver.completeMessage(message)
  } catch (err) {
    console.error('Unable to process message:', err)
  }
}

module.exports = { processMessage }
