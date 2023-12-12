import './Credits.css';
import Navbar from '../Navbar/Navbar';

export default function Credits() {
  const names = [
    'Arjun V',
    'George Jose',
    'Gokul S Raj',
    'Joel Manuel',
    'Reuben Dinny',
    'Riya Roy',
    'Shiva Sundar R',
    'Varun Pradeep',
    'Vijay K V',
    'Vishal Sankar K M',
  ];
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  shuffleArray(names);
  return (
    <div>
      <Navbar />
      <div className='team-container'>
        <h1>Meet the Team</h1>
        <div className='main'>
          {names.map((name) => {
            return <div className='item'>{name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
