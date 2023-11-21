const checkIsObject = (obj: any) => {
  if (
    !obj ||
    typeof obj !== "object" ||
    Array.isArray(obj)
  ) {
    return false;
  }
  return true;
}

export default checkIsObject;