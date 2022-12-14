import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    'Post muito interessante xDDDDDDDDDDDD LUL POGCHAMP HAHA'
  ])
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleCommentTextArea () {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment () {
    event.preventDefault();

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)

    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          switch (item.type) {
            case 'paragraph':
              return (<p key={item.content}>{item.content}</p>);
            case 'link':
              return (<p key={item.content}><a href="#">{item.content}</a></p>)
            case 'hashtag':
              return (
                <p key={item.content} className={styles.contentHashtag}>
                  {item.content.map(hashtag => (<a key={hashtag} href="">{hashtag}</a>))}
                </p>
              )
            default:
              break;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea 
          name='newComment'
          placeholder='Deixe seu comentário'
          value={newCommentText}
          onChange={handleCommentTextArea}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  )
}