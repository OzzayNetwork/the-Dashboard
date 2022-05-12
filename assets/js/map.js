$('.main-map-container .ma-backdrop').on('click', function() {
    $('.main-map-container aside').addClass('left-100');
    $(this).addClass('d-none');
});

function initMap() {

    //closing marker details

    $('.close-aside').on('click', function() {
        $(this).parent().parent().addClass('left-100');
        $('.ma-backdrop').addClass('d-none');
        // marker.setAnimation(null);
        removeMarkers();
    });



    //incident icon
    var warning = {
        url: "assets/images/map-assets/warning.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //service point
    var servicePoint = {
        url: "assets/images/map-assets/flag.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //active agent icon
    var activeAgent = {
        url: "assets/images/map-assets/active-agent.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //inactive agent icon
    var inactiveAgent = {
        url: "assets/images/map-assets/inactive-agent.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };



    //off street parking
    var street_parking = {
        url: "assets/images/map-assets/pin.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //bus park
    var bus = {
        url: "assets/images/map-assets/bus.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //street  icon
    var offStreet = {
        url: "assets/images/map-assets/street-parking.svg", // url
        scaledSize: new google.maps.Size(55, 55), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //city hall marker size styling
    var hall_icon = {
        url: "assets/images/map-assets/parliament.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //Approved sign applications
    var approved = {
        url: "assets/images/map-assets/approved.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //rejected sign applications
    var rejected = {
        url: "assets/images/map-assets/rejected.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //pending applications sign
    var ongoing = {
        url: "assets/images/map-assets/pending.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //clamped cars
    var clamped = {
        url: "assets/images/map-assets/clamped-a.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //rented plate
    var rentedPlate = {
        url: "assets/images/map-assets/rented.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //multiple sided plate

    var multiPlate = {
        url: "assets/images/map-assets/multiple-plates.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //available plate
    var availablePlate = {
        url: "assets/images/map-assets/available.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //damaged plate
    var damagedPlate = {
        url: "assets/images/map-assets/damaged.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //offline taxi
    var taxi_offline = {
        url: "assets/images/map-assets/offline-taxi.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //Available taxis
    var taxi_available = {
        url: "assets/images/map-assets/available-taxi.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //Booked taxis
    var taxi_booked = {
        url: "assets/images/map-assets/booked-taxi.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //On transit taxis
    var taxi_transit = {
        url: "assets/images/map-assets/ontransit-taxi.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //taxi incident
    var taxi_incident = {
        url: "assets/images/map-assets/warning-taxi.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }






    //the map options
    var options = {
        zoom: 15,
        center: { lat: -1.2921, lng: 36.8219 }
    }


    //new map
    var map = new google.maps.Map(document.getElementById('map'), options);


    /*

    //add marker
    var marker=new google.maps.Marker({
        position:{lat:-1.2925606, lng:36.7809636},
        map: map,
        icon: hall_icon
    });

    var infowindow=new google.maps.InfoWindow({
        content:'<h1>City Hall</h1>'
    });

    marker.addListener('click', function(){
        infowindow.open(map,marker);
    });
    */

    var gmarkers = [];

    //listen for click on  map

    // the smooth zoom function not in use
    function smoothZoom(map, max, cnt) {
        if (cnt >= max) {
            return;
        } else {
            z = google.maps.event.addListener(map, 'zoom_changed', function(event) {
                google.maps.event.removeListener(z);
                smoothZoom(map, max, cnt + 1);
            });
            setTimeout(function() { map.setZoom(cnt) }, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
        }
    }


    google.maps.event.addListener(map, 'dblclick', function(event) {
        removeMarkers();

        //add marker

        addMarker({ coords: event.latLng });



        //get value of clicked coodinates

        //stores coodinates of selected area
        var newCoords = event.latLng;

        // return clicked area coods
        console.log(event.latLng);

        console.log(newCoords.toString());
        newCoords = newCoords.toString();
        var Latitude;
        var longitude;
        longitude = newCoords.substring(newCoords.lastIndexOf(",") + 1);
        Latitude = newCoords.substring(0, newCoords.indexOf(','));
        Latitude = Latitude.substring(Latitude.lastIndexOf("(") + 1);

        longitude = longitude.substring(0, longitude.indexOf(')'));
        // console.log("Lat:"+Latitude);
        // console.log("long:"+longitude);

        //reverse geocoding function
        //usses clicked coodinates to get the newly clicked llocation


        smoothZoom(map, 12, map.getZoom());


        map.setCenter(new google.maps.LatLng(Latitude, longitude));

        reverseGeocoding(Latitude, longitude);

        // alert(event.latLng);

        //get latitude
        // var theStreet=newCoords.results[0];
        // alert(theStreet);





        //opens the side bar form
        $('#newPoint').removeClass('left-100').siblings().addClass('left-100');

        // alert("ready");
        // $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
        // alert("ready");
    });




    //taxi on transit
    addMarker({
        coords: { lat: -1.284319, lng: 36.8238173 },
        iconImage: taxi_transit,
        content: `<p class="d-none">approved|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
        <div class="card-body p-0 mb-2">
               <div class="d-flex">
             
               <div class="flex-shrink-0 align-self-center me-3">
                   <img src="assets/images/users/avatar-6.jpg" class="rounded-circle avatar-xs" alt="">
               </div>
               
               <div class="flex-grow-1 overflow-hidden pe-5">
                   <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                   Kelvin Kinoti
                    <div class="rating-star">
                            <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                        </div>
                   </h5>
                   <p class="text-truncate mb-0 text-uppercase">KAB 123P</p>
               </div>

               <div class="font-size-11 text-right">
                    <p class="text-muted mb-2"><i class="mdi mdi-circle text-warning align-middle me-1"></i> On Transit</p>
                    <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> ETA 36 Min</p>
               </div>
               </div>
        </div>

        <div class="card-body bg-light p-1>                
            <p class="text-muted mb-0"><i class="mdi mdi-map-marker text-warning align-middle me-1 font-18px"></i><span class="the-clicked-address"></span> Kenyatta National Hospital, Hospital Road, Nairobi, Kenya</p>
        </div>

        <div class="card-body">
            <ul class="verti-timeline list-unstyled">        
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="mdi mdi-square font-size-18 text-black"></i>
                    </div>
                    <div class="d-flex">
                        
                        <div class="flex-grow-1">
                        <span class="text-muted">
                         Pickup
                        </span>
                            <div>
                            90 Degrees by TSAVO, Nairobi, Kenya
                            </div>
                        </div>
                    </div>
                </li>
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="mdi mdi-circle font-size-18 text-primary"></i>
                    </div>
                    <div class="d-flex">
                       
                        <div class="flex-grow-1">
                        <span class="text-muted">
                         Destination
                        </span>
                            <div>
                            Tulip House, Mombasa Road, Nairobi, Kenya
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
       
        `
    });

    //rented add plate
    addMarker({
        coords: { lat: -1.289999, lng: 36.838173 },
        iconImage: multiPlate,
        content: `<p class="d-none">multi-plate|identifier</p><h6 class="text-uppercase d-flex align-items-center">
            <span class="active-agent mr-2">
            </span>1254THY<span></h6>
            <p class="mb-4"><strong>Large Billboard</strong></p>

            <p></span><strong class="">2 sides of 4 sides available</strong><span></h6></p>
            <div class="progress"> 
            <div class="progress-bar progress-bar-info" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <h5 class="text-primary mt-3"><strong>Renting details</strong></h5>
           
            <p class="mt-2 mb-2">Nouveta Ltd : 25th Nov, 2020 10:25PM - 25th Dec, 2020 10:25PM</p>

            <p></span><strong>28 sides of 203 Days Remaining</strong><span></h6></p>
            <div class="progress"> 
            <div class="progress-bar progress-bar-info" style="width: 73%" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <hr>
            <p>Kev & Co. Ltd : 28th Jan, 2020 09:23PM - 6Th Jan, 2020 12:00PM</p>
            <p></span><strong>12 sides of 63 Days Remaining</strong><span></h6></p>
            <div class="progress"> 
            <div class="progress-bar progress-bar-info" style="width: 54%" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <hr>

            <p>Click to view more details</p>

           
        
           
            `
    });

    //taxi on transit
    addMarker({
        coords: { lat: -1.29899, lng: 36.9187 },
        iconImage: taxi_transit,
        content: `<p class="d-none">approved|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
        <div class="card-body p-0 mb-2">
               <div class="d-flex">
             
               <div class="flex-shrink-0 align-self-center me-3">
                   <img src="assets/images/users/avatar-6.jpg" class="rounded-circle avatar-xs" alt="">
               </div>
               
               <div class="flex-grow-1 overflow-hidden pe-5">
                   <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                   Kelvin Kinoti
                    <div class="rating-star">
                            <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                        </div>
                   </h5>
                   <p class="text-truncate mb-0 text-uppercase">KAB 123P</p>
               </div>

               <div class="font-size-11 text-right">
                    <p class="text-muted mb-2"><i class="mdi mdi-circle text-warning align-middle me-1"></i> On Transit</p>
                    <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> ETA 36 Min</p>
               </div>
               </div>
        </div>

        <div class="card-body bg-light p-1>                
            <p class="text-muted mb-0"><i class="mdi mdi-map-marker text-warning align-middle me-1 font-18px"></i><span class="the-clicked-address"></span> Kenyatta National Hospital, Hospital Road, Nairobi, Kenya</p>
        </div>

        <div class="card-body">
            <ul class="verti-timeline list-unstyled">        
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="mdi mdi-square font-size-18 text-black"></i>
                    </div>
                    <div class="d-flex">
                        
                        <div class="flex-grow-1">
                        <span class="text-muted">
                         Pickup
                        </span>
                            <div>
                            90 Degrees by TSAVO, Nairobi, Kenya
                            </div>
                        </div>
                    </div>
                </li>
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="mdi mdi-circle font-size-18 text-primary"></i>
                    </div>
                    <div class="d-flex">
                       
                        <div class="flex-grow-1">
                        <span class="text-muted">
                         Destination
                        </span>
                            <div>
                            Tulip House, Mombasa Road, Nairobi, Kenya
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
       
        `
    });

    //Taxi ontransit
    addMarker({
        coords: { lat: -1.27199, lng: 36.8187 },
        iconImage: taxi_transit,
        content: `<p class="d-none">approved|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
        <div class="card-body p-0 mb-2">
               <div class="d-flex">
             
               <div class="flex-shrink-0 align-self-center me-3">
                   <img src="assets/images/users/avatar-6.jpg" class="rounded-circle avatar-xs" alt="">
               </div>
               
               <div class="flex-grow-1 overflow-hidden pe-5">
                   <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                   Kelvin Kinoti
                    <div class="rating-star">
                            <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                        </div>
                   </h5>
                   <p class="text-truncate mb-0 text-uppercase">KAB 123P</p>
               </div>

               <div class="font-size-11 text-right">
                    <p class="text-muted mb-2"><i class="mdi mdi-circle text-warning align-middle me-1"></i> On Transit</p>
                    <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> ETA 36 Min</p>
               </div>
               </div>
        </div>

        <div class="card-body bg-light p-1>                
            <p class="text-muted mb-0"><i class="mdi mdi-map-marker text-warning align-middle me-1 font-18px"></i><span class="the-clicked-address"></span> Kenyatta National Hospital, Hospital Road, Nairobi, Kenya</p>
        </div>

        <div class="card-body">
            <ul class="verti-timeline list-unstyled">        
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="mdi mdi-square font-size-18 text-black"></i>
                    </div>
                    <div class="d-flex">
                        
                        <div class="flex-grow-1">
                        <span class="text-muted">
                         Pickup
                        </span>
                            <div>
                            90 Degrees by TSAVO, Nairobi, Kenya
                            </div>
                        </div>
                    </div>
                </li>
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="mdi mdi-circle font-size-18 text-primary"></i>
                    </div>
                    <div class="d-flex">
                       
                        <div class="flex-grow-1">
                        <span class="text-muted">
                         Destination
                        </span>
                            <div>
                            Tulip House, Mombasa Road, Nairobi, Kenya
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
       
        `
    });

    //Booked Taxi

    addMarker({
        coords: { lat: -1.26199, lng: 36.8987 },
        iconImage: taxi_booked,
        content: `<p class="d-none">application|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
            <div class="card-body p-0 mb-2">
                   <div class="d-flex">
                 
                   <div class="flex-shrink-0 align-self-center me-3">
                       <img src="assets/images/users/avatar-2.jpg" class="rounded-circle avatar-xs" alt="">
                   </div>
                   
                   <div class="flex-grow-1 overflow-hidden pe-5">
                       <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                       Steven Franklin
                        <div class="rating-star">
                                <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                            </div>
                       </h5>
                       <p class="text-truncate mb-0 text-uppercase">KAB 123P</p>
                   </div>

                   <div class="font-size-11 text-right">
                        <p class="text-muted mb-2"><i class="mdi mdi-circle text-success align-middle me-1"></i> Booked</p>
                        <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> ETA 20 Min</p>
                   </div>
                   </div>
            </div>

            <div class="card-body bg-light p-1>                
                <p class="text-muted mb-0"><i class="mdi mdi-map-marker text-success align-middle me-1 font-18px"></i><span class="the-clicked-address"></span> Kenyatta National Hospital, Hospital Road, Nairobi, Kenya</p>
            </div>

            <div class="card-body">
                <ul class="verti-timeline list-unstyled">        
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="mdi mdi-square font-size-18 text-black"></i>
                        </div>
                        <div class="d-flex">
                            
                            <div class="flex-grow-1">
                            <span class="text-muted">
                             Pickup
                            </span>
                                <div>
                                90 Degrees by TSAVO, Nairobi, Kenya
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="mdi mdi-circle font-size-18 text-primary"></i>
                        </div>
                        <div class="d-flex">
                           
                            <div class="flex-grow-1">
                            <span class="text-muted">
                             Destination
                            </span>
                                <div>
                                Tulip House, Mombasa Road, Nairobi, Kenya
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
           
            `
    });

    //Taxi on transit
    addMarker({
        coords: { lat: -1.29889, lng: 36.8186003 },
        iconImage: taxi_transit,
        content: `<p class="d-none">approved|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
        <div class="card-body p-0 mb-2">
               <div class="d-flex">
             
               <div class="flex-shrink-0 align-self-center me-3">
                   <img src="assets/images/users/avatar-6.jpg" class="rounded-circle avatar-xs" alt="">
               </div>
               
               <div class="flex-grow-1 overflow-hidden pe-5">
                   <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                   Kelvin Kinoti
                    <div class="rating-star">
                            <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                        </div>
                   </h5>
                   <p class="text-truncate mb-0 text-uppercase">KAB 123P</p>
               </div>

               <div class="font-size-11 text-right">
                    <p class="text-muted mb-2"><i class="mdi mdi-circle text-warning align-middle me-1"></i> On Transit</p>
                    <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> ETA 36 Min</p>
               </div>
               </div>
        </div>

        <div class="card-body bg-light p-1>                
            <p class="text-muted mb-0"><i class="mdi mdi-map-marker text-warning align-middle me-1 font-18px"></i><span class="the-clicked-address"></span> Kenyatta National Hospital, Hospital Road, Nairobi, Kenya</p>
        </div>

        <div class="card-body">
            <ul class="verti-timeline list-unstyled">        
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="mdi mdi-square font-size-18 text-black"></i>
                    </div>
                    <div class="d-flex">
                        
                        <div class="flex-grow-1">
                        <span class="text-muted">
                         Pickup
                        </span>
                            <div>
                            90 Degrees by TSAVO, Nairobi, Kenya
                            </div>
                        </div>
                    </div>
                </li>
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="mdi mdi-circle font-size-18 text-primary"></i>
                    </div>
                    <div class="d-flex">
                       
                        <div class="flex-grow-1">
                        <span class="text-muted">
                         Destination
                        </span>
                            <div>
                            Tulip House, Mombasa Road, Nairobi, Kenya
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
       
        `
    });

    //inactive agent
    addMarker({
        coords: { lat: -1.29889, lng: 36.8386003 },
        iconImage: inactiveAgent,
        content: '<p class="d-none">agent|plate num</p><h6 class="text-capitalize d-flex align-items-center"><span class="offline-agent mr-2"></span> <span>Alex Wanjala <small><strong>(INACTIVE)</strong></small></span></h6> <p class="pb-0 mb-0">Last seen at <strong>Tom Mboya Street</strong> at 2:06 PM </strong></p><p>Most recent activity: <strong>Queried Car plate Number KBW 2589T at 11:41PM</strong><div class="listview text-align-left text-capitalize pl-0">  <div class="listview__header text-align-left text-capitalize text-left"><strong>23MB data (70%)</strong> Consumed in the <strong>last 13 Days</strong></div> <div class="progress"> <div class="progress-bar progress-bar-warning" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> </div></div></p> '
    });

    //inactive agent
    addMarker({
        coords: { lat: -1.29789, lng: 36.8486003 },
        iconImage: inactiveAgent,
        content: '<p class="d-none">agent|agent num</p><h6 class="text-capitalize d-flex align-items-center"><span class="offline-agent mr-2"></span> <span>Alex Wanjala <small><strong>(INACTIVE)</strong></small></span></h6> <p class="pb-0 mb-0">Last seen at <strong>Tom Mboya Street</strong> at 2:06 PM </strong></p><p>Most recent activity: <strong>Queried Car plate Number KBW 2589T at 11:41PM</strong></p> <div class="listview text-align-left text-capitalize pl-0">  <div class="listview__header text-align-left text-capitalize text-left"><strong>2MB data (25%)</strong> Consumed in the <strong>last 21 Days</strong></div> <div class="progress"> <div class="progress-bar progress-bar-success" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> </div></div>'
    });

    //active agent
    addMarker({
        coords: { lat: -1.3289, lng: 36.8452003 },
        iconImage: activeAgent,
        content: `<p class="d-none">agent|plate num</p>
            <h6 class="text-capitalize d-flex align-items-center">
            <span class="offline-agent mr-2"></span> 
            <span>Alex Wanjala <small><strong>(INACTIVE)</strong></small></span>
            </h6>
             <p class="pb-0 mb-0">Last seen at <strong>Tom Mboya Street</strong> at 2:06 PM </strong></p>
             <p>Most recent activity: <strong>Queried Car plate Number KBW 2589T at 11:41PM</strong>
             <div class="listview text-align-left text-capitalize pl-0">  
             <div class="listview__header text-align-left text-capitalize text-left">
             <strong>23MB data (70%)</strong> Consumed in the <strong>last 13 Days</strong>
             </div> 
             <div class="progress"> 
             <div class="progress-bar progress-bar-warning" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
             </div>
             </p> `
    });

    //Taxi incident
    addMarker({
        coords: { lat: -1.2974586, lng: 36.8087993 },
        iconImage: taxi_incident,
        content: `<p class="d-none">application|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
            <div class="card-body p-0 mb-2">
                   <div class="d-flex">
                 
                   <div class="flex-shrink-0 align-self-center me-3">
                       <img src="assets/images/users/avatar-5.jpg" class="rounded-circle avatar-xs" alt="">
                   </div>
                   
                   <div class="flex-grow-1 overflow-hidden pe-5">
                       <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                       Alex Wanjala
                        <div class="rating-star">
                                <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                            </div>
                       </h5>
                       <p class="text-truncate mb-0 text-uppercase">KAB 123P</p>
                   </div>

                   <div class="font-size-11 text-right">
                        <p class="text-muted mb-2"><i class="mdi mdi-circle text-danger align-middle me-1"></i> Car broke down</p>
                        <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> Last seen at 12:23 AM</p>
                   </div>
                   </div>
            </div>

            <div class="card-body bg-light d-flex p-1>  
            <i class="mdi mdi-map-marker text-danger align-middle me-1 font-18px"></i> 
            <div>
            <p class="text-muted mb-0">Reported at</p>                         
            <p class="mb-0">                
            <span class="the-clicked-address"></span> Nairobi hospital, Ngong Road, Nairobi, Kenya
            </p>
           </div>
            </div>

           
        </div>
           
            `
    });

    //available taxis
    addMarker({
        coords: { lat: -1.29948, lng: 36.8151453 },
        iconImage: taxi_available,
        content: `<p class="d-none">application|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
            <div class="card-body p-0 mb-2">
                   <div class="d-flex">
                 
                   <div class="flex-shrink-0 align-self-center me-3">
                       <img src="assets/images/users/avatar-4.jpg" class="rounded-circle avatar-xs" alt="">
                   </div>
                   
                   <div class="flex-grow-1 overflow-hidden pe-5">
                       <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                       Alex Wanjala
                        <div class="rating-star">
                                <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                            </div>
                       </h5>
                       <p class="text-truncate mb-0 text-uppercase">KAB 123P</p>
                   </div>

                   <div class="font-size-11 text-right">
                        <p class="text-muted mb-2"><i class="mdi mdi-circle text-primary align-middle me-1"></i> Available for Booking</p>
                        <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> Last seen at 12:23 AM</p>
                   </div>
                   </div>
            </div>

            <div class="card-body bg-light d-flex p-1>  
            <i class="mdi mdi-map-marker text-primary align-middle me-1 font-18px"></i> 
            <div>
            <p class="text-muted mb-0">Current Location</p>                         
            <p class="mb-0">                
            <span class="the-clicked-address"></span> Nairobi hospital, Ngong Road, Nairobi, Kenya
            </p>
           </div>
            </div>

           
        </div>
           
            `
    });

    //incidents

    addMarker({
        coords: { lat: -1.29948, lng: 36.8751453 },
        iconImage: warning,
        content: `<p class="d-none">incident|identifiret</p>
            <img class="mb-3" src="demo/img/widgets/photo-1564993719576-7b00be6317cd.jpg" alt=""> 
            <h6> Violent Nairobian</h6> 
            <p class="mb-0 pb-0">Reported By Tonny Jumba</p>
            <strong class="text-info">20 Min Ago</strong>`
    });

    //available Taxis
    addMarker({
        coords: { lat: -1.294219, lng: 36.806824 },
        iconImage: taxi_available,
        content: `<p class="d-none">application|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
            <div class="card-body p-0 mb-2">
                   <div class="d-flex">
                 
                   <div class="flex-shrink-0 align-self-center me-3">
                       <img src="assets/images/users/avatar-3.jpg" class="rounded-circle avatar-xs" alt="">
                   </div>
                   
                   <div class="flex-grow-1 overflow-hidden pe-5">
                       <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                       Alex Wanjala
                        <div class="rating-star">
                                <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                            </div>
                       </h5>
                       <p class="text-truncate mb-0 text-uppercase">KAB 123P</p>
                   </div>

                   <div class="font-size-11 text-right">
                        <p class="text-muted mb-2"><i class="mdi mdi-circle text-primary align-middle me-1"></i> Available for Booking</p>
                        <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> Last seen at 12:23 AM</p>
                   </div>
                   </div>
            </div>

            <div class="card-body bg-light d-flex p-1>  
            <i class="mdi mdi-map-marker text-primary align-middle me-1 font-18px"></i> 
            <div>
            <p class="text-muted mb-0">Current Location</p>                         
            <p class="mb-0">                
            <span class="the-clicked-address"></span> Nairobi hospital, Ngong Road, Nairobi, Kenya
            </p>
           </div>
            </div>

           
        </div>
           
            `
    });

    //booked taxi
    addMarker({
        coords: { lat: -1.2925606, lng: 36.7809636 },
        iconImage: taxi_booked,
        content: `<p class="d-none">application|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
            <div class="card-body p-0 mb-2">
                   <div class="d-flex">
                 
                   <div class="flex-shrink-0 align-self-center me-3">
                       <img src="assets/images/users/avatar-2.jpg" class="rounded-circle avatar-xs" alt="">
                   </div>
                   
                   <div class="flex-grow-1 overflow-hidden pe-5">
                       <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                       Steven Franklin
                        <div class="rating-star">
                                <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                            </div>
                       </h5>
                       <p class="text-truncate mb-0 text-uppercase">KAB 123P</p>
                   </div>

                   <div class="font-size-11 text-right">
                        <p class="text-muted mb-2"><i class="mdi mdi-circle text-success align-middle me-1"></i> Booked</p>
                        <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> ETA 20 Min</p>
                   </div>
                   </div>
            </div>

            <div class="card-body bg-light p-1>                
                <p class="text-muted mb-0"><i class="mdi mdi-map-marker text-success align-middle me-1 font-18px"></i><span class="the-clicked-address"></span> Kenyatta National Hospital, Hospital Road, Nairobi, Kenya</p>
            </div>

            <div class="card-body">
                <ul class="verti-timeline list-unstyled">        
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="mdi mdi-square font-size-18 text-black"></i>
                        </div>
                        <div class="d-flex">
                            
                            <div class="flex-grow-1">
                            <span class="text-muted">
                             Pickup
                            </span>
                                <div>
                                90 Degrees by TSAVO, Nairobi, Kenya
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="mdi mdi-circle font-size-18 text-primary"></i>
                        </div>
                        <div class="d-flex">
                           
                            <div class="flex-grow-1">
                            <span class="text-muted">
                             Destination
                            </span>
                                <div>
                                Tulip House, Mombasa Road, Nairobi, Kenya
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
           
            `

    });


    // Booked taxi
    addMarker({
        coords: { lat: -1.2924789, lng: 36.8243687 },
        iconImage: taxi_booked,
        content: `<p class="d-none">application|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
            <div class="card-body p-0 mb-2">
                   <div class="d-flex">
                 
                   <div class="flex-shrink-0 align-self-center me-3">
                       <img src="assets/images/users/avatar-2.jpg" class="rounded-circle avatar-xs" alt="">
                   </div>
                   
                   <div class="flex-grow-1 overflow-hidden pe-5">
                       <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                       Steven Franklin
                        <div class="rating-star">
                                <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                            </div>
                       </h5>
                       <p class="text-truncate mb-0 text-uppercase">KAB 123P</p>
                   </div>

                   <div class="font-size-11 text-right">
                        <p class="text-muted mb-2"><i class="mdi mdi-circle text-success align-middle me-1"></i> Booked</p>
                        <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> ETA 20 Min</p>
                   </div>
                   </div>
            </div>

            <div class="card-body bg-light p-1>                
                <p class="text-muted mb-0"><i class="mdi mdi-map-marker text-success align-middle me-1 font-18px"></i><span class="the-clicked-address"></span> Kenyatta National Hospital, Hospital Road, Nairobi, Kenya</p>
            </div>

            <div class="card-body">
                <ul class="verti-timeline list-unstyled">        
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="mdi mdi-square font-size-18 text-black"></i>
                        </div>
                        <div class="d-flex">
                            
                            <div class="flex-grow-1">
                            <span class="text-muted">
                             Pickup
                            </span>
                                <div>
                                90 Degrees by TSAVO, Nairobi, Kenya
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="mdi mdi-circle font-size-18 text-primary"></i>
                        </div>
                        <div class="d-flex">
                           
                            <div class="flex-grow-1">
                            <span class="text-muted">
                             Destination
                            </span>
                                <div>
                                Tulip House, Mombasa Road, Nairobi, Kenya
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
           
            `
    });

    //buss park
    //not applicable
    //  addMarker({
    //     coords:{lat:-1.2867576,lng:36.8344851},
    //     iconImage:bus,
    //     content: '<p class="d-none">offstreetParking|identifier</p><h6>Bus Park (Offstreet Parking)</h6> <P><strong>KES 3,256,230</strong> already collected</p>'
    // });

    //Taxi offline
    addMarker({
        coords: { lat: -1.27576, lng: 36.834851 },
        iconImage: taxi_offline,
        content: `<p class="d-none">application|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
            <div class="card-body p-0 mb-2">
                   <div class="d-flex">
                 
                   <div class="flex-shrink-0 align-self-center me-3">
                       <img src="assets/images/users/avatar-2.jpg" class="rounded-circle avatar-xs" alt="">
                   </div>
                   
                   <div class="flex-grow-1 overflow-hidden pe-5">
                       <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                       Steven Franklin
                        <div class="rating-star">
                                <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                            </div>
                       </h5>
                       <p class="text-truncate mb-0 text-uppercase">KAB 123P</p>
                   </div>

                   <div class="font-size-11 text-right">
                        <p class="text-muted mb-2"><i class="mdi mdi-circle text-muted align-middle me-1"></i> Driver is offline</p>
                        <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> Last seen at 12:23 AM</p>
                   </div>
                   </div>
            </div>

            <div class="card-body bg-light d-flex p-1>  
            <i class="mdi mdi-map-marker text-muted align-middle me-1 font-18px"></i> 
            <div>
            <p class="text-muted mb-0">Last recorded location</p>                         
            <p class="mb-0">                
            <span class="the-clicked-address"></span> Kenyatta National Hospital, Hospital Road, Nairobi, Kenya
            </p>
           </div>
            </div>

           
        </div>
           
            `
    });

    //add marker function
    function addMarker(props) {
        //add marker
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            animation: google.maps.Animation.DROP,
            // icon:props.iconImage             
        });

        if (!props.content) {
            gmarkers.push(marker);

        }

        if (props.iconImage) {
            //set icon image if its there
            marker.setIcon(props.iconImage);

        }

        // check if there is content
        if (props.content) {
            //set icon image if its there

            var infowindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('mouseover', function() {
                infowindow.open(map, marker);

            });

            marker.addListener('click', function(e) {
                toggleBounce(marker);

                var newCoords = e.latLng;
                newCoords = newCoords.toString();
                // alert(newCoords);

                var Latitude;
                var longitude;
                longitude = newCoords.substring(newCoords.lastIndexOf(",") + 1);
                Latitude = newCoords.substring(0, newCoords.indexOf(','));
                Latitude = Latitude.substring(Latitude.lastIndexOf("(") + 1);
                longitude = longitude.substring(0, longitude.indexOf(')'));

                reverseGeocoding(Latitude, longitude);





                // alert(iconImage); 
                // alert( e.latLng);

                //position of the clicked marker . the longitude and latitude
                var pointPosition = e.latLng;

                //gettting the image

                //initializing image as empty
                var theImage = "assets/images/billboard-ads/no-add.jpg";

                //checking if the content has an image
                if (infowindow.content.includes("<img")) {
                    //if it has image assign mage to

                    theImage = infowindow.content.substring(infowindow.content.indexOf('src="') + 5);
                    //the image url
                    theImage = theImage.substring(0, theImage.indexOf('"'));


                }

                var theContent = infowindow.content.substr(18);
                var theContent = theContent.substring(0, theContent.indexOf('<'));

                //the group of markers eg car,incident,collection points etc
                var theGroup = theContent.substring(0, theContent.indexOf('|'));

                //the unique identifier of the clicked item eg number plate
                var uniqueIdentifier = theContent.substring(theContent.lastIndexOf("|") + 1);

                // alert(theGroup);

                //if else statements to bring out the correct side details depending on the groups category

                if (theImage != "") {
                    $('#plate .plateImg').attr("src", theImage);
                    $('.plateImg').removeClass('d-none');

                } else {
                    $('.plateImg').addClass('d-none');
                }

                if (theGroup == "multi-plate") {

                    $('#multi-plate .plateImg').removeClass('d-none');

                    $('#multi-plate').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "plate") {

                    $('#plate').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "plate-available") {

                    $('#plate .plate-application-plate').removeClass('d-none').prev().addClass('d-none');

                    $('#plate').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "application") {

                    $('#application .plateImg').attr("src", theImage);

                    $('#application').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }


                if (theGroup == "approved") {
                    $('#approved .plateImg').attr("src", theImage);

                    $('#approved').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }



                if (theGroup == "car") {
                    //functions related to cars goes here
                    $('#car-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");

                }

                if (theGroup == "incident") {
                    //functions for incidents

                    $('#incident-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");

                }

                if (theGroup == "collectionPoint") {
                    //functions for collection points
                    $('#collectionPoint-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "agent") {
                    //function for agents
                    $('#agents-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "offstreetParking") {
                    //function for off street parking
                    $('#offstreet-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "street") {
                    //function for on street parking
                    $('#street-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");

                }





            });

            // close content when mouse exits
            marker.addListener('mouseout', function() {
                infowindow.close(map, marker);

            });

        }
    }
    searchAddress();


    //geo coding function
    //this function gets addresses and so on bassed on user input

    //call geo code
    //geocode()

    //get location form


    var locationForm = document.getElementById('location-form');

    //listen for submit
    locationForm.addEventListener('submit', geocode);

    function geocode(e) {
        e.preventDefault();
        var location = document.getElementById('location-input').value;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: location,
                    key: 'AIzaSyAEFGjUvVEiijrVxMaEovX-0MR4woRiHpg'
                }


            })
            .then(function(response) {
                // log full response
                console.log(response);

                //formated address
                var formattedAddress = response.data.results[0].formatted_address;
                console.log(formattedAddress);

                var formattedAddressOutput = `
              <ul class="list-group">
                <li class="list-group-item">${formattedAddress}</li>
              </ul>
            `;

                // Address components
                var addressComponents = response.data.results[0].address_components;
                var addressComponentsOutput = '<ul class="list-group">'
                for (var i = 0; i < addressComponents.length; i++) {
                    addressComponentsOutput += `
                    <li class="list-group-item">
                        <strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}
                    </li>
                `;
                }
                addressComponentsOutput += '</ul>'

                //geometry
                var lat = response.data.results[0].geometry.location.lat;
                var lng = response.data.results[0].geometry.location.lng;

                var geometryOutput = `
              <ul class="list-group">
                <li class="list-group-item"><strong>Latitude:</strong> :${lat}</li>
                <li class="list-group-item"><strong>Longitude:</strong> :${lng}</li>
              </ul>
            `;

                //output to APP
                document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
                document.getElementById('address-components').innerHTML = addressComponentsOutput;
                document.getElementById('geometry').innerHTML = geometryOutput;
            })
            .catch(function(error) {
                console.log(response);
            });
    }
    var map;
    var infowindow;


    function searchAddress() {


        var input = document.getElementById("pac-input");
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); // Bias the SearchBox results towards current map's viewport.

        map.addListener("bounds_changed", function() {
            searchBox.setBounds(map.getBounds());
        });

        //marker
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.

        //this function runs when the search box is clicked
        $('#pac-input').on('click', function() {
            $('.map-info-cont').addClass('left-100');
        });

        //shows the close button on the search box when someone starts to search for a new place
        $('#pac-input').on('keyup', function() {
            removeMarkers();
            $('.clear-map i').removeClass('d-none');
            $('.map-info-cont').addClass('left-100');
        });

        //this function is fired up when the close button is clicked
        // it clears the searched icons plus the search input box
        $('.clear-map').on('click', function() {

            $('.form-map-locations .clicked-subcounty').text("Not Selected").addClass('text-danger').removeClass('text-black');
            $('.form-map-locations .clicked-address').text("Not Selected").addClass('text-danger').removeClass('text-black');
            $('.form-map-locations .clicked-ward').text("Not Selected").addClass('text-danger').removeClass('text-black');
            $('.form-map-locations .clicked-street').text("Not Selected").addClass('text-danger').removeClass('text-black');


            const places = searchBox.getPlaces();
            console.log(places);
            $('.map-info-cont').addClass('left-100');
            $('#pac-input').val("");
            $('.clear-map i').addClass('d-none');
            removeMarkers();
            // Clear out the old markers.

            markers.forEach((marker) => {
                marker.setMap(null);
            });
        });

        searchBox.addListener("places_changed", () => {

            const places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach((marker) => {
                marker.setMap(null);



            });
            markers = [];


            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();

            places.forEach(function(place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                //the icons attributes for search results
                const icon = {
                    // url: place.icon,//adds unique marker depending on search results
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25),
                };

                // Create a marker for each place.
                var marker = new google.maps.Marker({
                    map: map,
                    title: place.name,
                    position: place.geometry.location,
                    icon: icon,
                    description: `<strong>` + place.name + `</strong><br><p class="text-info text-underline">Click Icon for more options</p>`
                })
                markers.push(marker);



                //creating markers for each place
                // markers.push(

                //     new google.maps.Marker({
                //     map,
                //     icon,
                //     title: place.name,
                //     position: place.geometry.location,
                //     draggable:true,

                //     })

                // );

                var infowindow = new google.maps.InfoWindow({
                    content: marker.description
                });



                marker.addListener('mouseout', function() {
                    infowindow.close(map, marker);

                });


                // add a hover event on the search results markers
                google.maps.event.addListener(marker, "mouseover", function(e) {
                    infowindow.open(map, marker);
                    infowindow.setContent(data.description);

                    var newCoords = e.latLng;
                    newCoords = newCoords.toString();
                    // alert(newCoords);

                    var Latitude;
                    var longitude;
                    longitude = newCoords.substring(newCoords.lastIndexOf(",") + 1);
                    Latitude = newCoords.substring(0, newCoords.indexOf(','));
                    Latitude = Latitude.substring(Latitude.lastIndexOf("(") + 1);
                    longitude = longitude.substring(0, longitude.indexOf(')'));

                    reverseGeocoding(Latitude, longitude);


                });
                toggleBounce(marker);

                //   adding marker click event

                google.maps.event.addListener(marker, "click", function(e) {

                    var thePlace = place.name;
                    var newCoords = e.latLng;

                    newCoords = newCoords.toString();

                    var Latitude;
                    var longitude;
                    longitude = newCoords.substring(newCoords.lastIndexOf(",") + 1);
                    Latitude = newCoords.substring(0, newCoords.indexOf(','));
                    Latitude = Latitude.substring(Latitude.lastIndexOf("(") + 1);
                    longitude = longitude.substring(0, longitude.indexOf(')'));

                    reverseGeocoding(Latitude, longitude);
                    $('#newPoint').removeClass('left-100').siblings().addClass('left-100');

                    var thePlaceHolder = $('.listview .selected-point-details');

                    thePlaceHolder = `
            <p class="mb-0"><strong>The Place Name</strong></p>
            <p class="clicked-place">${thePlace}</p>
            `;
                    toggleBounce(marker);



                });

                //   marker click event ends here



                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);

            // console.log(places[0]);
            // console.log("address components");
            // console.log(places[0].address_components[0]);
            // console.log(places[0].geometry.location.lat);
        });

        // serching through the map
    }

    //make the marker bounce
    function toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                marker.setAnimation(null);
            }, 750);
        }
    }

    //remove marker function
    function removeMarkers() {
        for (i = 0; i < gmarkers.length; i++) {
            gmarkers[i].setMap(null);
        }
    }

    // reverse geo coding
    function reverseGeocoding(Latitude, longitude) {
        const KEY = "AIzaSyAEFGjUvVEiijrVxMaEovX-0MR4woRiHpg";
        const LAT = -1.270102;
        const LNG = 36.8589333;
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${Latitude},${longitude}&key=${KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var reverseResultsOutput = '<ul class="list-group">';
                console.log(data);
                var numOfResults = data.results.length;

                var County;
                var County;
                var subCounty;
                var street;
                var address;
                var ward;
                var province;
                var constituency;


                for (var num = 0; num < numOfResults; num++) {
                    // let parts=data.results[i].address_components;
                    address = data.results[0].formatted_address;

                    // alert(num);
                    let parts = data.results[num].address_components;
                    parts.forEach(part => {
                        if (part.types.includes("administrative_area_level_2")) {
                            //we found subcounty inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            subCounty = part.long_name;


                        }
                        if (part.types.includes("country")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo

                            Country = part.long_name;

                        }

                        if (part.types.includes("administrative_area_level_1")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            County = part.long_name;


                        }
                        if (part.types.includes("administrative_area_level_4")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            ward = part.long_name;


                        }
                        if (part.types.includes("administrative_area_level_4")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            ward = part.long_name;


                        }
                        if (part.types.includes("sublocality_level_1")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            ward = part.long_name;


                        }

                        if (part.types.includes("route")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            street = part.long_name;


                        }
                        if (part.types.includes("sublocality_level_1")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            constituency = part.long_name;


                        }

                    });



                }
                // alert("ward::"+ward);
                // alert("street: "+street);
                // alert("constituency: "+constituency);
                // alert("subcounty:"+subCounty);

                $('#newPoint .clicked-ward').text(ward);
                $('.form-map-locations .clicked-ward').text(ward).addClass('text-black').removeClass('text-danger');;

                $('#newPoint .clicked-street').text(street);
                $('.form-map-locations .clicked-street').text(street).addClass('text-black').removeClass('text-danger');;

                $('#newPoint .clicked-subcounty').text(subCounty);
                $('.form-map-locations .clicked-subcounty').text(subCounty).addClass('text-black').removeClass('text-danger');


                $('#newPoint .clicked-address').text(address);
                $('.form-map-locations .clicked-address').text(address).addClass('text-black').removeClass('text-danger');
                $('.form-map-locations .form-address').val(address);

                $('.form-map-locations .form-latitude').val(Latitude);
                $('.form-map-locations .form-longitude').val(longitude);

                $('.permits-asside .the-clicked-address').text(address);
                $('.the-clicked-address').text(address);

                $('#plate .plate-address').text(address);
                $('#application .plate-address').text(address);

                $('#plate .plate-street').text(street);
                $('#application .plate-street').text(street);

                $('#multi-plate .plate-street').text(street);
                $('#multi-plate .plate-address').text(address);



                let parts = data.results[0].address_components;
                reverseResultsOutput += `
            <li class="list-group-item"><strong>Address: </strong> :${data.results[0].formatted_address}</li> 
            `;
                parts.forEach(part => {
                    // if(part.types.includes("country")){
                    //     //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                    //     reverseResultsOutput+=`
                    //     <ul class="list-group">
                    //         <li class="list-group-item"><strong>Country:</strong> :${part.long_name}</li>
                    //     `;

                    //     document.getElementById('location-cods').innerHTML=reverseResultsOutput;
                    // }

                    if (part.types.includes("administrative_area_level_2")) {
                        //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                        reverseResultsOutput += `
              
                    <li class="list-group-item"><strong>County: </strong> :${part.long_name}</li>
                `;

                        document.getElementById('location-cods').innerHTML = reverseResultsOutput;
                    }

                    reverseResultsOutput += "</ul>";
                })
            })
            .catch(err => console.warn(err.message));
    }

    //remove marker
    function removeMarkers() {
        for (i = 0; i < gmarkers.length; i++) {
            gmarkers[i].setMap(null);
        }
    }

}