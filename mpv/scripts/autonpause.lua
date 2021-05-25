--[[
 This script pauses playback when minimizing the window, and resumes playback
 if it's brought back again. If the player was already paused when minimizing,
 then try not to mess with the pause state.


function auto_pause()
local did_minimize = false
mp.observe_property("focused", "bool", function(name, value)
    local pause = mp.get_property_native("pause")
    if value == false then
        if pause == false and (toggle == true) then
            mp.set_property_native("pause", true)
            did_minimize = true
        end
    elseif value == true then
        if did_minimize and (pause == true) then
            mp.set_property_native("pause", false)
        end
        did_minimize = false
    end
end)
local did_minimize = false
mp.observe_property("window-minimized", "bool", function(name, value)
    local pause = mp.get_property_native("pause")
    if value == true then
        if pause == false then
            mp.set_property_native("pause", true)
            did_minimize = true
        end
    elseif value == false then
        if did_minimize and (pause == true) then
            mp.set_property_native("pause", false)
        end
        did_minimize = false
    end
end)
end
--]]
function auto_pause()
local did_minimize = false
mp.observe_property("focused", "bool", function(name, value)
    local pause = mp.get_property_native("pause")
    if value == false then
        if toggle == true then
            mp.set_property_native("pause", true)
            did_minimize = true
        end
    elseif value == true then
        if did_minimize and (pause == true) then
            mp.set_property_native("pause", false)
        end
        did_minimize = false
    end
end)
local did_minimize = false
mp.observe_property("window-minimized", "bool", function(name, value)
    local pause = mp.get_property_native("pause")
    if value == true then
        if pause == false then
            mp.set_property_native("pause", true)
            did_minimize = true
        end
    elseif value == false then
        if did_minimize and (pause == true) then
            mp.set_property_native("pause", false)
        end
        did_minimize = false
    end
end)
end

function refocus_pause()
toggle = true
end
 
function re_wm_pause()
toggle = false
end

toggle=true
auto_pause()

mp.add_key_binding(";", "refocus_p", refocus_pause)
mp.add_key_binding("b", "re_wm_p", re_wm_pause)
