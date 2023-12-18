"use client";

// next
import { useRouter } from "next/router";

// icons & styles
import {
  LucideIcon,
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
  Plus,
  Trash,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// user
import { useUser } from "@clerk/clerk-react";

// convex
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

interface ItemProps {
  // interaction button
  label: string;
  onClick: () => void;
  icon: LucideIcon;

  // document button
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  onExpand?: () => void;
  isSearch?: boolean;
  level?: number;
}

export const Item = ({
  label,
  onClick,
  icon: Icon,
  id,
  documentIcon,
  active,
  expanded,
  onExpand,
  isSearch,
  level = 0,
}: ItemProps) => {
  // arrow icon for expand and unexpand document
  const ArrowIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
      className={cn(
        "group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary",
        isSearch && "text-primary",
        id && "cursor-pointer"
      )}
    >
      {!!id && (
        <div
          role="button"
          className="h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 mr-1"
          onClick={() => {}}
        >
          <ArrowIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
          <span className="truncate">{label}</span>
        </div>
      )}

      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
      ) : (
        <Icon className="shrink-0 h-[18px] mr-2 to-muted-foreground" />
      )}

      <span className="truncate">{label}</span>
      {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      )}
    </div>
  );
};
