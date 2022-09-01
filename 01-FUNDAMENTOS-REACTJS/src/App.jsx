import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './globalStyles.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ericoptero.png',
      name: 'Eric Nantes',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'hashtag', content: ['#novoprojeto', '#nlw', '#rocketseat'] }
    ],
    publishedAt: new Date('2022-08-31 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/octocat.png',
      name: 'The Octocat',
      role: 'A github cat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'hashtag', content: ['#novoprojeto', '#nlw', '#rocketseat'] }
    ],
    publishedAt: new Date('2022-09-01 02:00:00')
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />

       <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
       </main>

      </div>
    </>
  )
}

export default App
