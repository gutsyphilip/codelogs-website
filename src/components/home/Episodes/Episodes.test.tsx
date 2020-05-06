import React from "react"
import renderer from "react-test-renderer"
import Episodes from "./Episodes"

describe("Episodes", () =>{
    it('should render successfully', () =>{
        const tree = renderer.create(<Episodes />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})