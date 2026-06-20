"use client";

import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { setFeedOrder } from "@/redux/slices/feedSlice";
import { useAppSelector as useSelectorTyped } from "@/hooks/use-app-selector";
import { GripVertical } from "lucide-react";

export function DraggableFeed() {
  const dispatch = useAppDispatch();
  const order = useSelectorTyped((state) => state.feed.order);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newOrder = Array.from(order);
    const [reorderedItem] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, reorderedItem);
    dispatch(setFeedOrder(newOrder));
  };

  // Ensure hydration match for drag-and-drop
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="feed-list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
            {order.map((type, index) => (
              <Draggable key={type} draggableId={type} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="flex items-center gap-4 rounded-md border bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div {...provided.dragHandleProps} className="cursor-grab">
                      <GripVertical className="h-5 w-5 text-gray-400" />
                    </div>
                    <span className="font-medium capitalize">{type} Feed</span>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
