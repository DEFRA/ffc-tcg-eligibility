const { MessageReceiver } = require('ffc-messaging')
const { processMessage } = require('./process-message')
const { eligibilitySubscription } = require('../config/message')

let eligibilityReceiver

const start = async () => {
  const eligibilityAction = message => processMessage(message, eligibilityReceiver)
  eligibilityReceiver = new MessageReceiver(eligibilitySubscription, eligibilityAction)
  await eligibilityReceiver.subscribe()

  console.info('Ready to receive messages')
}

const stop = async () => {
  await eligibilityReceiver.closeConnection()
}

module.exports = { start, stop }
