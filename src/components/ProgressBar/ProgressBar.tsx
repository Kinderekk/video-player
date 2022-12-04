import './ProgressBar.scss';

interface Props {
  percentage: number;
}

function ProgressBar(props: Props) {
  return (
    <div className="progress-bar-container">
      <div style={{ width: props.percentage + '%' }} className="progress-bar-covered" />
    </div>
  );
}

export default ProgressBar;
