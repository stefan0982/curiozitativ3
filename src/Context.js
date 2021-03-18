import React from "react"

const defaultContextValue = {
  data: {
    // set your initial data shape here
    searchInput: '',
  },
  set: () => {},
}

export const MyContext = React.createContext(defaultContextValue)

export default class ContextProviderComponent extends React.Component {
  constructor(props) {
    super(props)

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  render() {
    return <MyContext.Provider value={this.state}>{this.props.children}</MyContext.Provider>
  }
}