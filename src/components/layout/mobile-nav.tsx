"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
      </Button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Menu">
        <div className="flex flex-col space-y-4 pt-4">
          <p className="text-sm text-gray-500">Navigation links go here</p>
          {/* TODO: Add mobile links */}
        </div>
      </Modal>
    </div>
  );
}
