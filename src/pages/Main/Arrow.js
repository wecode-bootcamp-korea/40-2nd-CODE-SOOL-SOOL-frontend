export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="https://d38cxpfv0ljg7q.cloudfront.net/assets/icon_right_arrow.png"
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '50px',
        height: '50px',
        opacity: '0.5',
        right: '50px',
      }}
      onClick={onClick}
      alt="next"
    />
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="https://d38cxpfv0ljg7q.cloudfront.net/assets/icon_left_arrow.png"
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '50px',
        height: '50px',
        opacity: '0.5',
        left: '50px',
        zIndex: '999',
      }}
      onClick={onClick}
      alt="prev"
    />
  );
}

export function PickNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="https://d38cxpfv0ljg7q.cloudfront.net/assets/icon_next_arrow_active.png"
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '50px',
        height: '50px',
        right: '-50px',
      }}
      onClick={onClick}
      alt="next"
    />
  );
}

export function PickPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="https://d38cxpfv0ljg7q.cloudfront.net/assets/icon_prev_arrow_active.png"
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '50px',
        height: '50px',
        left: '-50px',
        zIndex: '999',
      }}
      onClick={onClick}
      alt="prev"
    />
  );
}

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export const pickSettings = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <PickNextArrow />,
  prevArrow: <PickPrevArrow />,
};
