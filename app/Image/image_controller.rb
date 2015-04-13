require 'rho/rhocontroller'
require 'helpers/browser_helper'

class ImageController < Rho::RhoController
  include BrowserHelper
  
  def map_all
      @images = Image.find(:all)
       puts @params.inspect
       
       #pin color
       if @params['latitude'].to_i == 0 and @params['longitude'].to_i == 0
         #@params['latitude'] = '37.349691'
         #@params['longitude'] = '-121.983261'
         @params['latitude'] = 'image.latitude'
         @params['longitude'] = 'image.longitude'
       end
       
       region = [@params['latitude'], @params['longitude'], 0.6, 0.6]     
       #region = {:center => @params['latitude'] + ',' + @params['longitude'], :radius => 0.2}
       myannotations = []
  
       #  add annotation with customized image :
       myannotations << {:latitude => 'image.latitude', :longitude => 'image.longitude', :title => "Original Location", :subtitle => "orig test", :url => "/app/GeoLocation/show?city=Original_Location", :pass_location => true} 
    
       myannotations << {:latitude => 'image.latitude', :longitude => 'image.longitude', :title => "PRELOAD MARKER"} 
     
      map_params = {
            :provider => @params['provider'],
            :settings => {:map_type => "roadmap", :region => region,
                          :zoom_enabled => true, :scroll_enabled => true, :shows_user_location => false, :api_key => '0jDNua8T4Teq0RHDk6_C708_Iiv45ys9ZL6bEhw'},
            :annotations => myannotations
       }
  
       #if @params['provider'] == 'RhoGoogle'
           MapView.set_file_caching_enable(1)
       #end 
  
       puts map_params.inspect            
 
       MapView.create map_params
       redirect :action => :index
    end

  #map latitude and longitue
  def showmap
       puts @params.inspect
       
       #pin color
       if @params['latitude'].to_i == 0 and @params['longitude'].to_i == 0
         #@params['latitude'] = '37.349691'
         #@params['longitude'] = '-121.983261'
         @params['latitude'] = '59.9'
         @params['longitude'] = '30.3'
       end
       
       region = [@params['latitude'], @params['longitude'], 0.6, 0.6]     
       #region = {:center => @params['latitude'] + ',' + @params['longitude'], :radius => 0.2}
       myannotations = []
  
       myannotations <<   {:street_address => "Cupertino, CA 95014", :title => "Cupertino", :subtitle => "zip: 95014", :url => "/app/GeoLocation/show?city=Cupertino", :pass_location => true }
       myannotations << {:street_address => "Santa Clara, CA 95051", :title => "Santa Clara", :subtitle => "zip: 95051", :url => "/app/GeoLocation/show?city=Santa%20Clara", :pass_location => true }
  
       #  add annotation with customized image :
       myannotations << {:latitude => '60.0270', :longitude => '30.299', :title => "Original Location", :subtitle => "orig test", :url => "/app/GeoLocation/show?city=Original_Location", :pass_location => true} 
       myannotations << {:latitude => '60.0270', :longitude => '30.33', :title => "Red", :subtitle => "r tst", :url => "/app/GeoLocation/show?city=Red_Location", :image => '/public/images/marker_red.png', :image_x_offset => 8, :image_y_offset => 32, :pass_location => true }
       myannotations << {:latitude => '60.0270', :longitude => '30.36', :title => "Green Location", :subtitle => "green test", :image => '/public/images/marker_green.png', :image_x_offset => 8, :image_y_offset => 32, :pass_location => true }
       myannotations << {:latitude => '60.0270', :longitude => '30.39', :title => "Blue Location Bla-Bla-Bla !!!", :subtitle => "blue test1\nblue test2\nblue 1234567890 1234567890 1234567890 test3", :url => "/app/GeoLocation/show?city=Blue_Location", :image => '/public/images/marker_blue.png', :image_x_offset => 8, :image_y_offset => 32, :pass_location => true }
  
       myannotations << {:latitude => '60.1', :longitude => '30.0', :title => "PRELOAD MARKER"} 
       myannotations << {:latitude => '59.7', :longitude => '30.0', :title => "PRELOAD MARKER"} 
       myannotations << {:latitude => '60.1', :longitude => '30.6', :title => "PRELOAD MARKER"} 
       myannotations << {:latitude => '59.7', :longitude => '30.6', :title => "PRELOAD MARKER"}
  
      map_params = {
            :provider => @params['provider'],
            :settings => {:map_type => "roadmap", :region => region,
                          :zoom_enabled => true, :scroll_enabled => true, :shows_user_location => true, :api_key => '0jDNua8T4Teq0RHDk6_C708_Iiv45ys9ZL6bEhw'},
            :annotations => myannotations
       }
  
       #if @params['provider'] == 'RhoGoogle'
           MapView.set_file_caching_enable(1)
       #end 
  
       puts map_params.inspect            
 
       MapView.create map_params
       redirect :action => :index
    end

   
  # GET /Image
  def index
    @images = Image.find(:all)
    #render :back => '/app'
  end
  
  def myMaps
    @msg = "Map is loading."
    @images = Image.find(:all)
    render :action => :map
  end

  # GET /Image/{1}
  def show
    @image = Image.find(@params['id'])
    if @image
      render :action => :show, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end
  
  def geo_callback
    # navigate to `show_location` page if GPS receiver acquire position  
    if @params['known_position'].to_i != 0 && @params['status'] =='ok'
  
      GeoLocation.set_notification '', '', 2
      WebView.navigate url_for(:action => :map_all)
    end
  end
  
  def show_location
    # check if we know our position   
    if !GeoLocation.known_position?
      # wait till GPS receiver acquire position
      GeoLocation.set_notification( url_for(:action => :geo_callback), "")
      redirect url_for(:action => :wait)
    else
      # show position
      render
    end
  end

  def camera_callback
    if @params['status'] == 'ok'
      image = Image.new()
      image.image_uri = @params['image_uri']
      image.latitude = GeoLocation.latitude
      image.longitude = GeoLocation.longitude
      image.created_at = Time.now
      
      image.save
      Rho::Notification.showPopup({
            :title => "Image Cap",
            :message => "Image saved to database",
            :buttons => ["OK"]
          })
    end
    
    WebView.navigate( url_for :action => :index )
  end 
  
  def takeCallback
    puts @params.inspect
    $image = @params['imageUri'] if (@params['image_uri'])
    Rho::WebView.navigate(url_for(:action => :index))
  end
 
  def systemApp
    options = {:useSystemViewfinder => "true", :outputFormat => "image", :fileName => "#{Rho::Application.databaseBlobFolder}/image"}
    $cameraList.first.takePicture options, url_for(:action => :takeCallback)
    render :index
  end
  # GET /Image/new
  def new
    
    Camera::take_picture(url_for :action => :camera_callback)    
   # render :action => :new, :back => url_for(:action => :index)
  end

  # GET /Image/{1}/edit
  def edit
    @image = Image.find(@params['id'])
    if @image
      render :action => :edit, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  # POST /Image/create
  def create
    @image = Image.create(@params['image'])
    redirect :action => :index
  end

  # POST /Image/{1}/update
  def update
    @image = Image.find(@params['id'])
    @image.update_attributes(@params['image']) if @image
    redirect :action => :index
  end

  # POST /Image/{1}/delete
  def delete
    @image = Image.find(@params['id'])
    @image.destroy if @image
    redirect :action => :index  
  end
end
