import Card from './card/card'

const withCard = (Component) => {
  const MyComponent = (props) => {
    return (
      <Card>
        <Component {...props} />
      </Card>
    )
  }
  MyComponent.displayName = 'Component with Card'
  return MyComponent
}

export default withCard
