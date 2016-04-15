import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Templates
import {MainLayout} from '../../ui/layouts/mainlayout'
import {HomePage} from '../../ui/components/homepage'
import {ProfilePage} from '../../ui/components/profile'
import {CameraPage} from '../../ui/components/camera'
import {DashboardPage} from '../../ui/components/dashboard'
import {NotificationsPage} from '../../ui/components/notifications'

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(MainLayout, {
      content: <HomePage />

    })
  }
})

FlowRouter.route('/profile', {
  name: 'profile',
  action() {
    mount(MainLayout, {
      content: <ProfilePage />
    })
  }
})


FlowRouter.route("/dashboard", {
  action() {
    mount(MainLayout, {
      content: (<DashboardPage name="Kevin"/>)
    });
  }
});

FlowRouter.route("/camera", {
  action() {
    mount(MainLayout, {
      content: (<CameraPage />)
    });
  }
});

FlowRouter.route("/notifications", {
  action() {
    mount(MainLayout, {
      content: (<NotificationsPage />)
    });
  }
});
