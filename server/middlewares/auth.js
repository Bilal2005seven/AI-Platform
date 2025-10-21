import { clerkClient } from "@clerk/express";

export const auth = async (req , res , next ) => {
    try{
        const {userId , has} = await req.auth();
        const hasPremimumPlan = await has({plan : 'premium-plan'});
        const user = await clerkClient.users.getUser(userId);
        if(!hasPremimumPlan && !user.publicMetadata.free_usage){
            req.free_usage = user.publicMetadata.free_usage 
        }
        else{
            await clerkClient.users.updateUserMetadata(userId , {
                privateMetadata : {
                    free_usage : 0
                }
            })
            req.free_usage = 0
        }
        req.plan = hasPremimumPlan ? 'premium' : 'free'
        next();
    }catch(err){
        res.json({success : false , message : err.message})
    }
}