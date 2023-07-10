import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWords } from '../redux/actions'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


const Homepage = () => {
    const words = useSelector(state => state.wordReducer.words)
    const [meaning, setMeaning] = useState("Meaning")
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const dispatch = useDispatch()
    const isFetching = useSelector(state => state.wordReducer.isFetching)
    console.log(words)
    useEffect(() => {
        dispatch(fetchWords())
    }, [])
    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-7xl px-2 py-8 sm:px-6 lg:px-8">
                {isFetching? <h1 className="text-center text-2xl font-semibold">Loading...</h1>: 
                <div class="flex flex-wrap justify-center">
                {
                    words.map((item, index) => {
                        return (
                            <div class="sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                                <div class="bg-gray-300 hover:bg-gray-400 shadow rounded-lg overflow-hidden cursor-pointer" onClick={() => {setOpen(true);setMeaning(item.wordMeaning)}}>
                                    <div class="p-4">
                                        <h3 class="text-xl font-semibold mb-2">{item.wordName}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>}
                
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Meaning
                                                </Dialog.Title>
                                                <div className="relative mt-2 rounded-md shadow-sm">
                                                    <p>{meaning}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            ref={cancelButtonRef}
                                            onClick={() => setOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default Homepage