import './NumbersView.scss';

interface Props {
  icon?: any;
  iconWidth?: string;
  iconHeight?: string;
  number: string;
  alt?: string;
}

function NumbersView(props: Props) {
  return (
    <div className="number">
      {props.icon && <img width={props.iconWidth || '12'} height={props.iconHeight || '12'} src={props.icon} alt={props.alt || ''} />}
        {props.number}
    </div>
  );
}

export default NumbersView;