export default function switchMode (mode, setMode) {
  if(mode === 'light'){
    setMode('dark')
  }else {
    setMode('light')
  }
}