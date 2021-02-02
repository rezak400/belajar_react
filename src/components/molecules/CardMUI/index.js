import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LoginBg } from '../../../assets';
import { useHistory } from "react-router-dom"



export default function CardMUI(props) {
  const history = useHistory()

  const { key, onClick, title, image, content, _id } = props
  console.log(key)
  console.log(`liat props`, props)

  return (
    <div>
      {/* <Card className={classes.root} >
        <CardActionArea  onClick={onClick}>
          <CardMedia className={classes.media} title="tes" >
            <img src={image} alt="gaada" style={{}}/>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.text} >
                {content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card> */}

      {/* //! tailblock */}
      <section class="body-font  cursor-pointer hover:opacity-80" onClick={() => { history.push(`/detail-blog/${_id}`)}}>
        <div class="container px-5 py-12 mx-auto ">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="flex flex-wrap md:flex-nowrap bg-white">
              {/* //!left  */}
              <div class="p-4 w-full md:w-64 flex-shrink-0 flex flex-col">
                <img class="lg:h-48 md:h-36  h-48 object-cover object-center bg-gray-300" src={image} alt="gambar"></img>
              </div>

              {/* //! right */}
              <div class="md:flex-grow p-5 break-words">
                {/* //! penting klo gkada spasi pake breal word */}
                <div className="inline-block break-words">
                  <h2 class="text-2xl font-semibold text-gray-900 title-font mb-2 font-primary">{title}</h2>
                  <p class="leading-relaxed  max-h-32 min-h-32 md:max-h-24  font-secondary" >
                   {content.substr(0, 50)+ " . . . ."}
                  </p>
                  <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
            </div>
        </div>
      </section>

    </div>
  );
}
