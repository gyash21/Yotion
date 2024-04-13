import { Loader } from "lucide-react";

import { cva, type VariantProps} from "class-variance-authority";
import { cn } from "@/lib/utils";


const spinnerVariants = cva(

    "text-muted-foreground-animate-spin",

    {
        variants:{
            size:{
                default: "h-4 w-4"
            }
        }
    }
)