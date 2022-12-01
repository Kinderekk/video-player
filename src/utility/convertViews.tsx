export default function convertViewsNumber(viewsNumber: number): string {
  let viewsNumberString = viewsNumber.toString();
  viewsNumberString = viewsNumberString.split('').reverse().join('').replace(/(.{3})/g,"$1,").split('').reverse().join('');
  return viewsNumberString;
}