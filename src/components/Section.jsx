import Typography from "./Typography";
import Character from "../assets/images/character.png"
import PropTypes from 'prop-types';

function Section (props) {
    return (
        <div key={props.title} className='rounded-3xl w-[352px] h-[293px] border-[1px]'>
          <div className="h-[128px] flex bg-[#152A46] rounded-t-3xl pt-[16px]">
            <img className='ml-[28px]' src={Character} alt="Character" />
            <div className="ml-[17px]">
              <Typography variant='primary' size='title'>{props.title}</Typography>
              <Typography size='body' variant='primary'>{props.content}</Typography>
            </div>
          </div>
          <div className="h-[164px] px-[24px] py-[16px]">
            <Typography variant="error" size="title">
              {props.price}
            </Typography>
          </div>
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    price: PropTypes.string,
}

export default Section;