export function formatQuestion(question, author) {
  let { id, timestamp, optionOne, optionTwo } = question
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
