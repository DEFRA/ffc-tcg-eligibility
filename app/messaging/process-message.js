const processMessage = async (message, receiver) => {
  try {
    console.log(`message details: ${message.body.message}`)
    // send response to the subscription
    await receiver.completeMessage(message)
  } catch (err) {
    console.error('Unable to process message:', err)
  }
}

module.exports = { processMessage }
