import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/ContactUs'
import Category from '@/pages/JobCategory'
import Blog from '@/pages/BlogHome'
import BlogDetails from '@/pages/BlogDetails'
import JobSearch from '@/pages/JobSearch'
import JobSingle from '@/pages/JobSingle'
import PricingPlan from '@/pages/PricingPlan'
import Elements from '@/pages/Elements'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blogDetails',
      name: 'blogDetails',
      component: BlogDetails
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/jobSearch',
      name: 'jobSearch',
      component: JobSearch
    },
    {
      path: '/jobSingle',
      name: 'jobSingle',
      component: JobSingle
    },
    {
      path: '/pricingPlan',
      name: 'pricingPlan',
      component: PricingPlan
    },
    {
      path: '/elements',
      name: 'elements',
      component: Elements
    }
  ]
})
