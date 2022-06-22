type Props = {
  paddingAll: boolean,
  customPadding: boolean,
  children: JSX.Element,
}

export default function WidthLimiter({ children, paddingAll, customPadding }: Props) {
  let newPadding: string = '';
  if (customPadding == false) {
    if (true == paddingAll) {
      newPadding="p-8";
    } else {
      newPadding="px-8";
    }
  }
  return (
    <div className={`lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[100rem] mx-auto ${newPadding}`}>
      { children }
    </div>
  )
}