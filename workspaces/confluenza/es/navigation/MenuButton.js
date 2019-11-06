import _styled from "@emotion/styled-base";

var MenuButton = _styled("button", {
  target: "egsd30z0",
  label: "MenuButton"
})(function (_ref) {
  var backgroundImage = _ref.backgroundImage;
  return {
    width: '48px',
    height: '48px',
    backgroundColor: 'white',
    backgroundImage: "url(".concat(backgroundImage, ")"),
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    margin: 0,
    borderRadius: '10px',
    outline: 0,
    boxShadow: 'none',
    // border: '1px solid #F486CA',
    borderWidth: 0,
    transition: 'all 0.2s ease-in-out 0s',
    '@media (hover)': {
      '&:hover': {
        backgroundColor: '#F486CA'
      }
    },
    cursor: 'pointer'
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL01lbnVCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR21CIiwiZmlsZSI6Ii4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL01lbnVCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuYnV0dG9uKCh7IGJhY2tncm91bmRJbWFnZSB9KSA9PiAoe1xuICB3aWR0aDogJzQ4cHgnLFxuICBoZWlnaHQ6ICc0OHB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAsXG4gIGJhY2tncm91bmRTaXplOiAnYXV0byAxMDAlJyxcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICBtYXJnaW46IDAsXG4gIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICBvdXRsaW5lOiAwLFxuICBib3hTaGFkb3c6ICdub25lJyxcbiAgLy8gYm9yZGVyOiAnMXB4IHNvbGlkICNGNDg2Q0EnLFxuICBib3JkZXJXaWR0aDogMCxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UtaW4tb3V0IDBzJyxcbiAgJ0BtZWRpYSAoaG92ZXIpJzoge1xuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y0ODZDQSdcbiAgICB9XG4gIH0sXG4gIGN1cnNvcjogJ3BvaW50ZXInXG59KSlcbi8vIGNvbnN0IE1lbnVJbnB1dCA9IHN0eWxlZC5pbnB1dCgoeyBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRDb2xvciB9KSA9PiAoe1xuLy8gICB3aWR0aDogJzQ4cHgnLFxuLy8gICBoZWlnaHQ6ICc0OHB4Jyxcbi8vICAgYmFja2dyb3VuZENvbG9yLFxuLy8gICBiYWNrZ3JvdW5kSW1hZ2UsXG4vLyAgIGJhY2tncm91bmRTaXplOiAnYXV0byAxMDAlJyxcbi8vICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4vLyAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuLy8gICBtYXJnaW46IDAsXG4vLyAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuLy8gICBvdXRsaW5lOiAwLFxuLy8gICBib3hTaGFkb3c6ICdub25lJyxcbi8vICAgLy8gYm9yZGVyOiAnMXB4IHNvbGlkICNGNDg2Q0EnLFxuLy8gICBib3JkZXJXaWR0aDogMCxcbi8vICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UtaW4tb3V0IDBzJyxcbi8vICAgJyY6aG92ZXInOiB7XG4vLyAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y0ODZDQSdcbi8vICAgfSxcbi8vICAgY3Vyc29yOiAncG9pbnRlcidcbi8vIH0pKVxuXG4vLyBjb25zdCBNZW51QnV0dG9uID0gKHsgb25DbGljaywgcmVzZXQsIGJhY2tncm91bmRJbWFnZSwgLi4ucHJvcHMgfSkgPT4ge1xuLy8gICBjb25zdCBbIGJhY2tncm91bmRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yIF0gPSB1c2VTdGF0ZSgnd2hpdGUnKVxuXG4vLyAgIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuLy8gICAgIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09ICd3aGl0ZScpIHtcbi8vICAgICAgIHNldEJhY2tncm91bmRDb2xvcignI0Y0ODZDQScpXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHNldEJhY2tncm91bmRDb2xvcignd2hpdGUnKVxuLy8gICAgIH1cbi8vICAgICBvbkNsaWNrKClcbi8vICAgfVxuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgc2V0QmFja2dyb3VuZENvbG9yKCd3aGl0ZScpXG4vLyAgIH0sIFtyZXNldF0pXG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8TWVudUlucHV0IG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfSBiYWNrZ3JvdW5kSW1hZ2U9e2B1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWB9IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfSB7Li4ucHJvcHN9IC8+XG4vLyAgIClcbi8vIH1cblxuZXhwb3J0IHsgTWVudUJ1dHRvbiB9XG4iXX0= */"); // const MenuInput = styled.input(({ backgroundImage, backgroundColor }) => ({
//   width: '48px',
//   height: '48px',
//   backgroundColor,
//   backgroundImage,
//   backgroundSize: 'auto 100%',
//   backgroundPosition: 'center center',
//   backgroundRepeat: 'no-repeat',
//   margin: 0,
//   borderRadius: '10px',
//   outline: 0,
//   boxShadow: 'none',
//   // border: '1px solid #F486CA',
//   borderWidth: 0,
//   transition: 'all 0.2s ease-in-out 0s',
//   '&:hover': {
//     backgroundColor: '#F486CA'
//   },
//   cursor: 'pointer'
// }))
// const MenuButton = ({ onClick, reset, backgroundImage, ...props }) => {
//   const [ backgroundColor, setBackgroundColor ] = useState('white')
//   const onClickHandler = () => {
//     if (backgroundColor === 'white') {
//       setBackgroundColor('#F486CA')
//     } else {
//       setBackgroundColor('white')
//     }
//     onClick()
//   }
//   useEffect(() => {
//     setBackgroundColor('white')
//   }, [reset])
//   return (
//     <MenuInput onClick={onClickHandler} backgroundImage={`url(${backgroundImage})`} backgroundColor={backgroundColor} {...props} />
//   )
// }


export { MenuButton };
//# sourceMappingURL=MenuButton.js.map