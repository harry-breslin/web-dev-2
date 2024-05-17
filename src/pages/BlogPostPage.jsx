import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { blogPosts } from '../blogsPosts/blogPosts'

const URL = 'https://jsonplaceholder.typicode.com/users'

export default function BlogPost() {
  const { slug } = useParams()
  const [upVotes, setUpVotes] = useState(0)

  const { title, imgUrl, content } = blogPosts[slug];

  const [name, setName] = useState()
  useEffect(() => {
    fetch(URL)
      .then((result) => result.json())
      .then((json) => {
        setTimeout(() => {
          setName(json[Math.floor(Math.random() * json.length)].name);
        }, 2000);
      });
  }, [])
  
  useEffect(() => {
    console.log("Upvotes: " + upVotes)
  }, [upVotes]);
  
  function upVote() {
    setUpVotes(upVotes + 1);
  }

  function downVote() {
    if (upVotes > 0) {
      setUpVotes(upVotes - 1);
    }
  }

  return (
    <div className='flex flex-col items-center space-y-4 p-10'>
      <img className='h-96 w-96 rounded-full object-cover' src={imgUrl} alt={imgUrl} />
      <h1 className='font-bold text-4xl'>{title}</h1>
      <h2>{name == null ? "Loading" : "Written by " + name}</h2>
      <p className='text-lg'>{content}</p>
      <div className='flex flex-row items-center space-x-4'>
        <button onClick={upVote} className='border rounded p-2'>
          👍
        </button>
        <p>{upVotes}</p>
        <button onClick={downVote} className='border rounded p-2'>
          👎
        </button>
      </div>
      
    </div>
  )
}
