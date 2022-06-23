type Props = {
  paddingAll: boolean,
  customPadding: boolean,
  children: JSX.Element,
}

export default function WidthLimiter({ children, paddingAll, customPadding }: Props) {
  let newPadding: string = '';
  if (customPadding == false) {
    // coder doesn't want to customize the padding
    // so use default padding values
    if (true == paddingAll) {
      // coder wants padding in all directions
      newPadding="p-8";
    } else {
      // coder wants padding in x axis 
      newPadding="px-8";
    }
  }
  return (
    <div className={`lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[100rem] mx-auto ${newPadding}`}>
      { children }
    </div>
  )
}