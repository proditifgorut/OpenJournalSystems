import { faker } from '@faker-js/faker';
import { Article } from '../types';

export const generateMockArticles = (count: number): Article[] => {
  const sections = ['Computer Science', 'Engineering', 'Medicine', 'Physics', 'Biology', 'Chemistry'];
  
  return Array.from({ length: count }, (_, index) => ({
    id: `article-${index + 1}`,
    title: faker.lorem.sentence({ min: 8, max: 15 }).replace(/\.$/, ''),
    abstract: faker.lorem.paragraphs(2),
    authors: Array.from({ length: faker.number.int({ min: 1, max: 4 }) }, (_, i) => ({
      name: faker.person.fullName(),
      affiliation: faker.company.name() + ' University',
      email: faker.internet.email(),
      orcid: `0000-000${faker.number.int({ min: 1, max: 9 })}-${faker.number.int({ min: 1000, max: 9999 })}-${faker.number.int({ min: 1000, max: 9999 })}`,
      isCorresponding: i === 0,
    })),
    keywords: Array.from({ length: 5 }, () => faker.word.noun()),
    doi: `10.${faker.number.int({ min: 1000, max: 9999 })}/${faker.string.alphanumeric(8)}`,
    submittedDate: faker.date.past({ years: 1 }).toISOString().split('T')[0],
    publishedDate: faker.date.recent({ days: 180 }).toISOString().split('T')[0],
    volume: faker.number.int({ min: 10, max: 15 }),
    issue: faker.number.int({ min: 1, max: 4 }),
    pages: `${faker.number.int({ min: 1, max: 500 })}-${faker.number.int({ min: 501, max: 600 })}`,
    status: 'published',
    views: faker.number.int({ min: 100, max: 5000 }),
    downloads: faker.number.int({ min: 50, max: 2500 }),
    citations: faker.number.int({ min: 0, max: 150 }),
    sections: [sections[faker.number.int({ min: 0, max: sections.length - 1 })]],
  }));
};
