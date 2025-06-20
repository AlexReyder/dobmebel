"use client"
import { Button } from '@/shared/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'

import { cn } from '@/shared/utils/common'
import { Column } from '@tanstack/react-table'
import {
	ArrowDown,
	ArrowUp,
	ChevronsDownUp,
} from 'lucide-react'


interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }  
    return (
      <div className={cn('flex items-center space-x-2', className)}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              size='sm'
              className='-ml-3 h-8 data-[state=open]:bg-accent'
            >
              <span>{title}</span>
              {column.getIsSorted() === 'desc' ? (
                <ArrowDown className='ml-2 h-4 w-4' />
              ) : column.getIsSorted() === 'asc' ? (
                <ArrowUp className='ml-2 h-4 w-4' />
              ) : (
                <ChevronsDownUp className='ml-2 h-4 w-4' />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='start'>
            <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
              <ArrowUp className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
              По возрастанию
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
              <ArrowDown className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
              По убыванию
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
}