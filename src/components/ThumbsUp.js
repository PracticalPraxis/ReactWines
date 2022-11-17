import classNames from 'classnames';
import {useState} from 'react';
import PropTypes from 'prop-types';
import './static/css/ThumbsUp.css';

function ThumbsUp({id, defaultValue = 0, max = 1, readonly = false}) {
    const [thumb, setThumbsUp] = useState(defaultValue);
    const [tempThumb, setTempThumb] = useState(defaultValue);

  const ThumbsUp = [];
  for (let i = 1; i <= max; i++) {
     ThumbsUp.push(
      <span
             className={i <= tempThumb ? 'ThumbsUpOn' : null}
        key={i}
        onClick={() => (readonly ? null : setThumbsUp(i))}
             onMouseOver={() => (readonly ? null : setTempThumb(i))}>
        &#128077;
      </span>,
    );
  }
  return (
    <span
      className={classNames({
        ThumbsUp: true,
        ThumbsUpReadonly: readonly,
      })}
          onMouseOut={() => setTempThumb(thumb)}>
      {ThumbsUp}
        <input id={id} type="hidden" value={thumb} />
    </span>
  );
}

ThumbsUp.propTypes = {
  defaultValue: PropTypes.number,
  readonly: PropTypes.bool,
  max: PropTypes.number,
};

export default ThumbsUp;