
export const cleanInputNumber = (value: string) => {
  return value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
}