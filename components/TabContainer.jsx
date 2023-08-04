import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import React from 'react'
import TeamContainer from "./TeamContainer"

export default function TabContainer() {
  return (
    <>
    <Tabs defaultValue="tab1" className="w-[400px]">
    <TabsList>
        <TabsTrigger value="tab1">Mission</TabsTrigger>
        <TabsTrigger value="tab2">Principles</TabsTrigger>
        <TabsTrigger value="tab3">Actions</TabsTrigger>
        <TabsTrigger value="tab4">Team</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      <p class="text-l ...">The Why</p>
    </TabsContent>
    <TabsContent value="tab2">
      <p class="text-l ...">The What</p>
    </TabsContent>
    <TabsContent value="tab3">
      <p class="text-l ...">The How</p>
    </TabsContent>
    <TabsContent value="tab4">
      <p class="text-l ...">The Who</p>
      <TeamContainer />
    </TabsContent>
    </Tabs>
    </>
  )
}


