// middleware/flashMessages.js
export const flashMiddleware = (req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.user = req.session.user || null;
    next();
};

{
    active:true,
    created_at:"2025-09-02T17:27:47.169509+00:00",
    email:"coach@test.com",
    full_name:"Coach",
    id:"39249236-203e-495f-852e-5a944cd02f63",
    updated_at:"2025-09-02T17:29:05.134383+00:00",
    workspace_memberships:[
        workspace_id:"12f0715a-3124-41df-93dd-f31f7e8d671f",
        role:"Coach",
        workspace:{
            abbreviation:"FAR",
            logo_url:"http://127.0.0.1:54321/storage/v1/object/public/workspace-logos/association_sportive_des_forces_armees_royales.png",
            name:"Association Sportive des Forces Armées Royales",
            type:"CLUB_FOOT_PRO"
        }
    ]
}
