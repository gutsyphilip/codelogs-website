import React from 'react'
import Layout from './Layout'
import { Hero } from '../home'
import renderer from 'react-test-renderer'

describe('Layout', () => {
    it('renders correctly', () => {
        const tree = renderer.
        create(<Layout> <Hero/> </Layout>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
