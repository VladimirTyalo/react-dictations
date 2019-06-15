import { LoremIpsum } from 'lorem-ipsum'

export const getLesson = () => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  })

  return lorem.generateParagraphs(1)
}
