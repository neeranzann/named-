

import React from 'react'

const App = () => {



  const data = [
    {
      id: 1,
      title: 'Avatar',
      image: 'https://www.imdb.com/title/tt1630029/mediaviewer/rm92486145/?ref_=tt_ov_i'
    },
    {
      id: 2,
      title: 'Smile',
      image: 'https://variety.com/wp-content/uploads/2022/08/smile.jpg?w=681&h=383&crop=1&resize=681%2C383'
    },

  ];
  let x;

  setTimeout(() => {
    x = {
      title: 'hello 4 seconds'
    }
    console.log('hello 4 second');
  }, [4000])

  // const dat = new Date();
  // console.log(dat.getFullYear());
  // console.log(dat.getDay());
  // console.log(dat.getHours())
  const per = {
    // data: {
    //   id: 1
    // }
  };

  let p = 90;
  return (
    <div>
      <h1>  {p ?? 'hello'}</h1>

      <h1>{per.data?.id}</h1>


      {data.map((d) => {
        return <div key={d.id}>
          <h1>{d.title}</h1>
          {/* <img src={d.image} alt="" /> */}
        </div>
      })}


    </div>
  )
}

export default App