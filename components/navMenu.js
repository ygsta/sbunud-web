import React from 'react';
import {Menu, Transition} from '@headlessui/react'
import {classNames} from './utils/helper'
import Link from "next/link";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.navigation = [
      {name: 'Home', href: '/', current: true},
      {
        name: 'Member', href: '', current: false, subMenu: [
          {name: 'Executive Committee', href: '/excomm', current: false},
          {name: 'Our Members', href: '/member', current: false},
        ]
      },
      {name: 'Activity', href: '/activity', current: false},
      {name: 'Gallery', href: '#', current: false},
      {name: 'Women In Engineering', href: '/wie', current: false, text_color: "text-wie-color"},
    ];
  }

  renderNestedMenu(nav) {
    return (
        <Menu.Items static className="absolute right-0 w-56 mt-5 origin-top-right bg-white
                                      border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
          {nav.subMenu.map((subNav, id) => (
              <div className="py-1">
                <Menu.Item>
                  <Link href={subNav.href}  fr>
                    <a id={"submenu-" + id}
                       className={`hover:bg-gray-100 hover:text-gray-900 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}>
                      {subNav.name}
                    </a>
                  </Link>
                </Menu.Item>
              </div>

          ))}
        </Menu.Items>
    )
  }

  renderProfileMenu() {
    return (
        <div className="relative">
          <Menu>
              <span className="rounded-md shadow-sm">
                <Menu.Button
                    className="inline-flex justify-center m-1 p-2 transition duration-150 ease-in-out bg-transparent border border-gray-300 rounded-full focus:ring-1 focus:shadow-outline-blue">
                  <span> <img src="/images/vercel.svg" className="h-5 w-5" alt="Profile"/></span>
                </Menu.Button>
              </span>

            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">

              <Menu.Items static className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                <div className="px-4 py-3">
                  <p className="text-sm leading-5">Signed in as</p>
                  <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                    yosiaagustadewa@gmail.com
                  </p>
                </div>

                <div className="py-1">
                  <Menu.Item>
                    <a href="#account-settings"
                       className={`hover:bg-gray-100 hover:text-gray-900 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}>
                      Account settings
                    </a>
                  </Menu.Item>
                </div>

                <Menu.Item>
                  <a href="#sign-out" className={`hover:bg-red-100 hover:text-gray-900 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}>
                    Sign out
                  </a>
                </Menu.Item>
              </Menu.Items>

            </Transition>
          </Menu>
        </div>
    );
  }

  render() {
    return (
        <header className={`z-50 sticky top-0 bg-white border-b-2 backdrop-filter backdrop-blur-xl bg-opacity-60`}>
          <div className="container mx-auto flex justify-between">
            <button>
              <img className="h-14 w-auto py-3" src="/images/ieee_logo.png"/>
            </button>

            <ul className="flex items-center">

              {this.navigation.map(nav =>
                  <Menu>
                    <Menu.Button className="relative m-3">
                        <span className="justify-center transition duration-150 ease-in-out bg-transparent">
                          <Link href={nav.href}>
                            <a className={`inline-block text-black` + classNames(nav.text_color)}>{nav.name}</a>
                          </Link>
                        </span>

                      <Transition enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95">

                        {nav.subMenu ? this.renderNestedMenu(nav) : ""}

                      </Transition>

                    </Menu.Button>
                  </Menu>
              )}

              {this.renderProfileMenu()}
            </ul>
          </div>
        </header>
    )
  }
}

export default NavMenu;

