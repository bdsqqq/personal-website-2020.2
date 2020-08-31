//This hook is based on the solution given by Jake Boyles
//on the question https://stackoverflow.com/questions/10168034/how-can-i-reverse-an-array-in-javascript-without-using-libraries
const usepureReverseArray = (array: any[]) => {
  return array.map((item: any, idx: number) => array[array.length - 1 - idx]);
};

export default usepureReverseArray;
