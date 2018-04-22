export const randomColor = () => {
    const colors = ['blue', 'red', 'green', 'magenta', 'yellow']
    return colors[Math.floor(Math.random() * colors.length)]
  }