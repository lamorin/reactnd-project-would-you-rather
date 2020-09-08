export function formatQuestion(question, author) {
  const { id, timestamp, optionOne, optionTwo } = question
  const { name, avatarURL } = author
  return {
    authorId: author.id,
    name,
    avatarURL,
    id,
    timestamp,
    optionOne,
    optionTwo,
  }
}
