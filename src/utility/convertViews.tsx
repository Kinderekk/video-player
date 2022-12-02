export default function convertViewsNumber(viewsNumber: number): string {
  let viewsNumberString = viewsNumber.toString();
  viewsNumberString = viewsNumberString.split('').reverse().join('').replace(/(.{3})/g,"$1,").split('').reverse().join('');
  if (viewsNumberString[0] === ',') {
    const splittedString = viewsNumberString.split('');
    viewsNumberString = splittedString.splice(1, splittedString.length - 1).join('')
  }
  return viewsNumberString;
}