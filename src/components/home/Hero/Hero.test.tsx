import React from "react"
import Hero from "./Hero"
import renderer from "react-test-renderer"

describe("Hero", () => {
    it("should always render the same markup", () => {
        const tree = renderer.create(<Hero />).toJSON
        expect(tree).toMatchSnapshot()
    })
})
