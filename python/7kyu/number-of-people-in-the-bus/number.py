def number(bus_stops):
    
    remaining_people = 0
    
    for stop in bus_stops:
        remaining_people += stop[0] - stop[1]
        
    return remaining_people
