import { lazy } from 'react'

const KinematicCube = { descr: '', tags: [], Component: lazy(() => import('./KinematicCube')), bright: false }
const CubeHeap = { descr: '', tags: [], Component: lazy(() => import('./CubeHeap')), bright: false }
const ConvexPolyhedron = {
  descr: '',
  tags: [],
  Component: lazy(() => import('./ConvexPolyhedron')),
  bright: false,
}
const Pingpong = { descr: '', tags: [], Component: lazy(() => import('./Pingpong')), bright: false }
const MondayMorning = { descr: '', tags: [], Component: lazy(() => import('./MondayMorning')), bright: false }
const Constraints = { descr: '', tags: [], Component: lazy(() => import('./Constraints')), bright: false }
const Chain = { descr: '', tags: [], Component: lazy(() => import('./Chain')), bright: false }

export { Pingpong, MondayMorning, KinematicCube, CubeHeap, ConvexPolyhedron, Chain, Constraints }
